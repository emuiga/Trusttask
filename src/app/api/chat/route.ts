import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

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

    if (conversationId) {
      // Add message to existing conversation
      conversation = await prisma.conversation.findUnique({
        where: { id: conversationId },
        include: { messages: true }
      });

      if (!conversation) {
        return NextResponse.json(
          { error: 'Conversation not found' },
          { status: 404 }
        );
      }
    } else {
      // Create new conversation
      conversation = await prisma.conversation.create({
        data: {
          userId,
          status: 'active'
        },
        include: { messages: true }
      });
    }

    // Add the user message
    const newMessage = await prisma.message.create({
      data: {
        conversationId: conversation.id,
        text: message,
        sender: 'user'
      }
    });



    // Update conversation timestamp
    await prisma.conversation.update({
      where: { id: conversation.id },
      data: { updatedAt: new Date() }
    });

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

    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      include: {
        messages: {
          orderBy: { timestamp: 'asc' }
        }
      }
    });

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