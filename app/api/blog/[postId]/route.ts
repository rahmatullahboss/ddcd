import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { currentRole } from '@/lib/auth';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  try {
    const { postId } = await params;
    
    if (!postId) {
      return new NextResponse('Post ID is required', { status: 400 });
    }

    const post = await db.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!post) {
      return new NextResponse('Post not found', { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('[BLOG_POSTID_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  try {
    const { postId } = await params;
    
    const role = await currentRole();

    if (role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!postId) {
      return new NextResponse('Post ID is required', { status: 400 });
    }

    const values = await req.json();

    const post = await db.post.update({
      where: {
        id: postId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('[BLOG_POSTID_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ postId: string }> }
) {
  try {
    const { postId } = await params;
    
    const role = await currentRole();

    if (role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!postId) {
      return new NextResponse('Post ID is required', { status: 400 });
    }

    const post = await db.post.delete({
      where: {
        id: postId,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('[BLOG_POSTID_DELETE]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}