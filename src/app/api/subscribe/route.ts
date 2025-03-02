import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const subscriber = await prisma.subscriber.create({
      data: { email },
    });

    return NextResponse.json({ 
      message: 'Successfully subscribed to newsletter',
      subscriber 
    });
  } catch (error: any) {
    console.error('Subscription error:', error);

    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'This email is already subscribed' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter. Please try again later.' },
      { status: 500 }
    );
  }
}