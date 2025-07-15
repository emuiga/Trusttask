import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

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
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId }
    });

    if (!conversation) {
      return NextResponse.json(
        { error: 'Conversation not found' },
        { status: 404 }
      );
    }

    // Add automatic response
    const autoResponse = await prisma.message.create({
      data: {
        conversationId,
        text: "Thanks for your message! Our crew will get back to you soon. We typically respond within several hours.",
        sender: 'support'
      }
    });

    // Update conversation timestamp
    await prisma.conversation.update({
      where: { id: conversationId },
      data: { updatedAt: new Date() }
    });

    return NextResponse.json({ message: autoResponse });

  } catch (error) {
    console.error('Auto-response API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 