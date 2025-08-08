import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for conversations (shared with main chat route)
const conversations = new Map();

export async function POST(request: NextRequest) {
  try {
    const { conversationId } = await request.json();

    if (!conversationId) {
      return NextResponse.json(
        { error: 'Conversation ID is required' },
        { status: 400 }
      );
    }

    // Verify conversation exists
    const conversation = conversations.get(conversationId);

    if (!conversation) {
      return NextResponse.json(
        { error: 'Conversation not found' },
        { status: 404 }
      );
    }

    // Add automatic response
    const autoResponse = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      conversationId,
      text: "Thanks for your message! Our crew will get back to you soon. We typically respond within several hours.",
      sender: 'support',
      timestamp: new Date().toISOString()
    };

    conversation.messages.push(autoResponse);
    conversation.updatedAt = new Date().toISOString();

    // Store updated conversation
    conversations.set(conversationId, conversation);

    return NextResponse.json({ message: autoResponse });

  } catch (error) {
    console.error('Auto-response API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 