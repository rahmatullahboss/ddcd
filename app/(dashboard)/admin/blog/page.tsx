import { db } from '@/lib/db';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import PostsClient from './_components/client';

export default async function ManageBlogPage() {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
        <Button>
          <a href="/dashboard/admin/blog/new" className="text-white no-underline flex items-center">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Post
          </a>
        </Button>
      </div>
      <PostsClient posts={posts} />
    </div>
  );
}