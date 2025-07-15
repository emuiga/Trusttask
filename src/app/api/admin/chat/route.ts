import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// Simple admin authentication (you can enhance this later)
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'trusttask-admin-2024';

function authenticateAdmin(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.substring(7);
  return token === ADMIN_TOKEN;
}

export async function POST(request: NextRequest) {
  try {
    if (!authenticateAdmin(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { message, conversationId } = await request.json();

    if (!message || !conversationId) {
      return NextResponse.json(
        { error: 'Message and conversationId are required' },
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

    // Add support message
    const newMessage = await prisma.message.create({
      data: {
        conversationId,
        text: message,
        sender: 'support'
      }
    });

    // Update conversation status and timestamp
    await prisma.conversation.update({
      where: { id: conversationId },
      data: { 
        status: 'active',
        updatedAt: new Date() 
      }
    });

    return NextResponse.json({ message: newMessage });

  } catch (error) {
    console.error('Admin chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!authenticateAdmin(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'active';
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');

    const conversations = await prisma.conversation.findMany({
      where: { status },
      include: {
        messages: {
          orderBy: { timestamp: 'desc' },
          take: 1 // Get only the latest message for preview
        },
        _count: {
          select: { messages: true }
        }
      },
      orderBy: { updatedAt: 'desc' },
      take: limit,
      skip: (page - 1) * limit
    });

    const total = await prisma.conversation.count({
      where: { status }
    });

    return NextResponse.json({
      conversations,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Admin chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 