"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Send, MessageCircle, Clock, CheckCircle, XCircle, RefreshCw, LogOut } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: string;
}

interface Conversation {
  id: string;
  userId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  messages: Message[];
  _count: {
    messages: number;
  };
}

export default function AdminDashboard() {
  const router = useRouter();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("active");

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token || token !== "trusttask-admin-2024") {
      router.push("/admin/login");
    }
  }, [router]);

  const ADMIN_TOKEN = "trusttask-admin-2024"; // In production, use proper auth

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const fetchConversations = useCallback(async () => {
    try {
      const response = await fetch(`/api/admin/chat?status=${status}`, {
        headers: {
          'Authorization': `Bearer ${ADMIN_TOKEN}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setConversations(data.conversations);
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
    } finally {
      setLoading(false);
    }
  }, [status]);

  const fetchConversation = async (conversationId: string) => {
    try {
      const response = await fetch(`/api/chat?conversationId=${conversationId}`);
      if (response.ok) {
        const conversation = await response.json();
        setSelectedConversation(conversation);
      }
    } catch (error) {
      console.error('Error fetching conversation:', error);
    }
  };

  const sendMessage = async () => {
    if (!message.trim() || !selectedConversation) return;

    setSending(true);
    try {
      const response = await fetch('/api/admin/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ADMIN_TOKEN}`
        },
        body: JSON.stringify({
          message: message.trim(),
          conversationId: selectedConversation.id
        })
      });

      if (response.ok) {
        // Refresh the conversation
        await fetchConversation(selectedConversation.id);
        setMessage("");
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'closed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <MessageCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-[#00ffb0]" />
          <p className="text-gray-600">Loading conversations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#120932] text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">TrustTask Support Dashboard</h1>
            <p className="text-white/70 mt-1">Manage customer conversations and provide support</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Conversations</h2>
                  <button
                    onClick={fetchConversations}
                    className="text-[#00ffb0] hover:text-[#00e6a0] transition-colors"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
                
                {/* Status Filter */}
                <div className="flex space-x-2 mb-4">
                  {['active', 'pending', 'closed'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStatus(s)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        status === s
                          ? 'bg-[#00ffb0] text-[#18181b]'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {conversations.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    <MessageCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No conversations found</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {conversations.map((conversation) => (
                      <button
                        key={conversation.id}
                        onClick={() => fetchConversation(conversation.id)}
                        className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                          selectedConversation?.id === conversation.id ? 'bg-[#00ffb0]/10' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              {getStatusIcon(conversation.status)}
                              <span className="text-sm font-medium text-gray-900 truncate">
                                User {conversation.userId.slice(-6)}
                              </span>
                            </div>
                            {conversation.messages[0] && (
                              <p className="text-sm text-gray-600 truncate">
                                {conversation.messages[0].text}
                              </p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">
                              {formatTime(conversation.updatedAt)}
                            </p>
                          </div>
                          <div className="ml-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {conversation._count.messages}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[600px] flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Conversation with User {selectedConversation.userId.slice(-6)}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Started {formatTime(selectedConversation.createdAt)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(selectedConversation.status)}
                        <span className="text-sm text-gray-600 capitalize">
                          {selectedConversation.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {selectedConversation.messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex items-start space-x-3 ${
                          msg.sender === 'support' ? 'justify-end' : ''
                        }`}
                      >
                        {msg.sender === 'user' && (
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-gray-600 font-medium text-xs">U</span>
                          </div>
                        )}
                        <div className={`max-w-xs ${msg.sender === 'support' ? 'order-2' : ''}`}>
                          <div className={`rounded-2xl p-3 ${
                            msg.sender === 'support' 
                              ? 'bg-[#00ffb0] text-[#18181b]' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            <p className="text-sm">{msg.text}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 ml-1">
                            {formatTime(msg.timestamp)}
                          </p>
                        </div>
                        {msg.sender === 'support' && (
                          <div className="w-8 h-8 bg-[#00ffb0] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-[#18181b] font-bold text-xs">T</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Type your response..."
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ffb0] focus:border-transparent"
                          disabled={sending}
                        />
                        <button
                          type="submit"
                          disabled={!message.trim() || sending}
                          className="bg-[#00ffb0] hover:bg-[#00e6a0] disabled:bg-gray-300 disabled:cursor-not-allowed text-[#18181b] p-2 rounded-xl transition-all duration-200"
                        >
                          <Send className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Select a conversation</p>
                    <p className="text-sm">Choose a conversation from the list to start responding</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 