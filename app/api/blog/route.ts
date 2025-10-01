import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { currentRole } from '@/lib/auth';
import { currentUser } from '@/lib/auth';

export async function GET() {
  try {
    const posts = await db.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('[BLOG_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const role = await currentRole();
    const user = await currentUser();

    if (role !== 'ADMIN' || !user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { title, content, imageUrl, category } = await req.json();

    if (!title || !content) {
      return new NextResponse('Title and content are required', { status: 400 });
    }

    const post = await db.post.create({
      data: {
        title,
        content,
        imageUrl,
        category,
        authorId: user.id as string,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('[BLOG_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}