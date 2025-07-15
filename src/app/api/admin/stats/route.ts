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

export async function GET(request: NextRequest) {
  try {
    if (!authenticateAdmin(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get conversation counts by status
    const [activeCount, pendingCount, closedCount, totalCount] = await Promise.all([
      prisma.conversation.count({ where: { status: 'active' } }),
      prisma.conversation.count({ where: { status: 'pending' } }),
      prisma.conversation.count({ where: { status: 'closed' } }),
      prisma.conversation.count()
    ]);

    // Get total message count
    const totalMessages = await prisma.message.count();

    // Get recent activity (conversations updated in last 24 hours)
    const recentActivity = await prisma.conversation.count({
      where: {
        updatedAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
        }
      }
    });

    return NextResponse.json({
      stats: {
        active: activeCount,
        pending: pendingCount,
        closed: closedCount,
        total: totalCount,
        totalMessages,
        recentActivity
      }
    });

  } catch (error) {
    console.error('Admin stats API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 