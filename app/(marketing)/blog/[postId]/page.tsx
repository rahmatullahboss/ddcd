import { Post } from '@prisma/client';
import Image from 'next/image';

type PostWithAuthor = Post & {
    author: {
        name: string | null;
    } | null;
};

async function getPost(postId: string): Promise<PostWithAuthor | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/blog/${postId}`, { cache: 'no-store' });
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

interface PostDetailsPageProps {
  params: {
    postId: string;
  };
}

export default async function PostDetailsPage({ params }: PostDetailsPageProps) {
  const post = await getPost(params.postId);

  if (!post) {
    return (
      <div className="container mx-auto text-center py-12">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-4 text-center">{post.title}</h1>
      <div className="text-center text-gray-500 mb-8">
        <span>By {post.author?.name || 'Unknown Author'}</span>
        <span className="mx-2">•</span>
        <span>
          {new Date(post.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </div>

      {post.imageUrl && (
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div className="prose lg:prose-xl max-w-none mx-auto">
        <p>{post.content}</p>
      </div>
    </div>
  );
}