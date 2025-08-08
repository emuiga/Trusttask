import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for conversations (for demo purposes)
const conversations = new Map();

export async function POST(request: NextRequest) {
  try {
    const { message, userId, conversationId } = await request.json();

    if (!message || !userId) {
      return NextResponse.json(
        { error: 'Message and userId are required' },
        { status: 400 }
      );
    }

    let conversation;

    if (conversationId && conversations.has(conversationId)) {
      // Add message to existing conversation
      conversation = conversations.get(conversationId);
    } else {
      // Create new conversation
      const newConversationId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      conversation = {
        id: newConversationId,
        userId,
        status: 'active',
        messages: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      conversations.set(newConversationId, conversation);
    }

    // Add the user message
    const newMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      conversationId: conversation.id,
      text: message,
      sender: 'user',
      timestamp: new Date().toISOString()
    };

    conversation.messages.push(newMessage);
    conversation.updatedAt = new Date().toISOString();

    // Store updated conversation
    conversations.set(conversation.id, conversation);

    return NextResponse.json({
      conversationId: conversation.id,
      message: newMessage
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const conversationId = searchParams.get('conversationId');

    if (!conversationId) {
      return NextResponse.json(
        { error: 'Conversation ID is required' },
        { status: 400 }
      );
    }

    const conversation = conversations.get(conversationId);

    if (!conversation) {
      return NextResponse.json(
        { error: 'Conversation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(conversation);

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 