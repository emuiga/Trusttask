"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Minimize2, ChevronDown, Home, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: string;
}



const faqQuestions = [
  {
    question: "How does TrustTask work?",
    answer: "TrustTask handles all the micro-tasking work on your accounts while you earn passive income. We complete tasks, optimize performance, and process weekly payouts automatically."
  },
  {
    question: "What are the requirements to join?",
    answer: "You need to be located in the United States, Canada, the UK, Australia, or New Zealand. We'll guide you through the onboarding process once you join the waitlist."
  },
  {
    question: "How much can I earn?",
    answer: "Earnings vary based on your account performance and the platforms you're connected to. Most users see consistent weekly payouts starting from their first week."
  },
  {
    question: "Is there any upfront cost?",
    answer: "No upfront costs. We only succeed when you do - you only pay after you receive your first payout."
  },
  {
    question: "How do payouts work?",
    answer: "We deposit your earnings directly to your account every week. You can track all activity and earnings history through your dashboard."
  }
];

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("home");

  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [userId] = useState(() => `user_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Listen for toggle event from footer
  useEffect(() => {
    const handleToggleChat = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };

    window.addEventListener('toggleLiveChat', handleToggleChat);
    return () => window.removeEventListener('toggleLiveChat', handleToggleChat);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Poll for new messages when chat is open
  useEffect(() => {
    if (!isOpen || !conversationId) return;

    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(`/api/chat?conversationId=${conversationId}`);
        if (response.ok) {
          const conversation = await response.json();
          setMessages(conversation.messages);
        }
      } catch (error) {
        console.error('Error polling for messages:', error);
      }
    }, 3000); // Poll every 3 seconds

    return () => clearInterval(pollInterval);
  }, [isOpen, conversationId]);

  const sendMessage = async (text: string) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          userId,
          conversationId
        })
      });

      if (response.ok) {
        const data = await response.json();
        setConversationId(data.conversationId);
        
        // Fetch updated conversation
        const conversationResponse = await fetch(`/api/chat?conversationId=${data.conversationId}`);
        if (conversationResponse.ok) {
          const conversation = await conversationResponse.json();
          setMessages(conversation.messages);
        }

        // Show automatic response after a short delay
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(async () => {
            try {
              // Send automatic response to database
              const autoResponse = await fetch('/api/chat/auto-response', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  conversationId: data.conversationId
                })
              });

              if (autoResponse.ok) {
                const autoData = await autoResponse.json();
                setMessages(prev => [...prev, autoData.message]);
              }
            } catch (error) {
              console.error('Error sending auto-response:', error);
            } finally {
              setIsTyping(false);
            }
          }, 2000);
        }, 1000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message.trim());
      setMessage("");
    }
  };

  const handleFaqClick = (question: string) => {
    // Send FAQ question as user message
    sendMessage(question);
    
    // Show typing indicator and respond with answer
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      // The answer will be sent by support through the admin dashboard
    }, 1500);
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#00ffb0] text-[#18181b] p-3 md:p-3 rounded-full transition-all duration-200 z-50 hover:bg-[#00e6a0] shadow-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-4 md:bottom-6 md:right-6 md:left-auto md:top-auto md:w-96 md:h-[500px] bg-white rounded-2xl border border-gray-200 z-50 overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-[#120932] text-white p-3 md:p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#00ffb0] rounded flex items-center justify-center">
                  <span className="text-[#18181b] font-bold text-xs md:text-sm">T</span>
                </div>
                <div>
                  <h3 className="font-medium text-xs md:text-sm">TrustTask Support</h3>
                  <p className="text-xs text-white/70">We&apos;re here to help!</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/70 hover:text-white transition-colors p-1"
                >
                  <Minimize2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  className="h-[calc(100vh-8rem)] md:h-[420px] flex flex-col"
                  initial={{ height: 0 }}
                  animate={{ height: 'calc(100vh - 8rem)' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Tabs */}
                  <div className="flex border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab("home")}
                      className={`flex-1 py-2 md:py-3 px-3 md:px-4 text-xs md:text-sm font-medium transition-colors ${
                        activeTab === "home" 
                          ? "text-[#00ffb0] border-b-2 border-[#00ffb0]" 
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-1 md:space-x-2">
                        <Home className="h-3 w-3 md:h-4 md:w-4" />
                        <span>Home</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab("messages")}
                      className={`flex-1 py-2 md:py-3 px-3 md:px-4 text-xs md:text-sm font-medium transition-colors ${
                        activeTab === "messages" 
                          ? "text-[#00ffb0] border-b-2 border-[#00ffb0]" 
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-1 md:space-x-2">
                        <MessageSquare className="h-3 w-3 md:h-4 md:w-4" />
                        <span>Messages</span>
                      </div>
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="flex-1 overflow-y-auto">
                    {activeTab === "home" ? (
                      <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                        {/* Welcome Message */}
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#00ffb0] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-[#18181b] font-bold text-xs">T</span>
                          </div>
                          <div className="bg-gray-100 rounded-2xl p-2 md:p-3 max-w-[calc(100%-3rem)] md:max-w-xs">
                            <p className="text-xs md:text-sm text-gray-800">
                              👋 Hi! Welcome to TrustTask. How can we help you today?
                            </p>
                          </div>
                        </div>

                        {/* FAQ Questions */}
                        <div className="space-y-2 md:space-y-3">
                          <p className="text-xs md:text-sm font-medium text-gray-700">Frequently Asked Questions:</p>
                          {faqQuestions.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg">
                              <button
                                onClick={() => handleFaqClick(faq.question)}
                                className="w-full px-3 md:px-4 py-2 md:py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                              >
                                <span className="text-xs md:text-sm text-gray-700 pr-2">{faq.question}</span>
                                <ChevronDown className="h-3 w-3 md:h-4 md:w-4 text-gray-500 flex-shrink-0" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                        {/* Chat Messages */}
                        {messages.length === 0 ? (
                          <div className="text-center text-gray-500 py-8">
                            <MessageSquare className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 opacity-50" />
                            <p className="text-xs md:text-sm">No messages yet</p>
                            <p className="text-xs">Start a conversation to see messages here</p>
                          </div>
                        ) : (
                          <>
                            {messages.map((msg) => (
                              <div
                                key={msg.id}
                                className={`flex items-start space-x-2 md:space-x-3 ${
                                  msg.sender === 'user' ? 'justify-end' : ''
                                }`}
                              >
                                {msg.sender === 'support' && (
                                  <div className="w-6 h-6 md:w-8 md:h-8 bg-[#00ffb0] rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-[#18181b] font-bold text-xs">T</span>
                                  </div>
                                )}
                                <div className={`max-w-[calc(100%-3rem)] md:max-w-xs ${msg.sender === 'user' ? 'order-2' : ''}`}>
                                  <div className={`rounded-2xl p-2 md:p-3 ${
                                    msg.sender === 'user' 
                                      ? 'bg-[#00ffb0] text-[#18181b]' 
                                      : 'bg-gray-100 text-gray-800'
                                  }`}>
                                    <p className="text-xs md:text-sm">{msg.text}</p>
                                  </div>
                                  <p className="text-xs text-gray-500 mt-1 ml-1">
                                    {formatTime(msg.timestamp)}
                                  </p>
                                </div>
                                {msg.sender === 'user' && (
                                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-gray-600 font-medium text-xs">U</span>
                                  </div>
                                )}
                              </div>
                            ))}
                            
                            {/* Typing Indicator */}
                            {isTyping && (
                              <div className="flex items-start space-x-2 md:space-x-3">
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-[#00ffb0] rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-[#18181b] font-bold text-xs">T</span>
                                </div>
                                <div className="bg-gray-100 rounded-2xl p-2 md:p-3">
                                  <div className="flex space-x-1">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div ref={messagesEndRef} />
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ffb0] focus:border-transparent text-xs md:text-sm"
                        disabled={isTyping}
                      />
                      <button
                        type="submit"
                        disabled={!message.trim() || isTyping}
                        className="bg-[#00ffb0] hover:bg-[#00e6a0] disabled:bg-gray-300 disabled:cursor-not-allowed text-[#18181b] p-2 rounded-xl transition-all duration-200"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 