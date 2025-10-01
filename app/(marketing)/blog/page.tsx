import { Post } from '@prisma/client';
import { Suspense } from 'react';
import PostCard from '@/components/blog/post-card';

type PostWithAuthor = Post & {
    author: {
        name: string | null;
    } | null;
};

async function getPosts(): Promise<PostWithAuthor[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/blog`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Blog</h1>
      <Suspense fallback={<p className="text-center">Loading posts...</p>}>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No blog posts found.</p>
        )}
      </Suspense>
    </div>
  );
}