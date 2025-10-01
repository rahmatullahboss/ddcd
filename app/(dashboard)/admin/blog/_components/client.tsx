"use client";

import { useState } from 'react';
import { Post, User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash } from 'lucide-react';
import { toast } from 'sonner';

type PostWithAuthor = Post & {
    author: {
        name: string | null;
    } | null;
};

interface PostsClientProps {
  posts: PostWithAuthor[];
}

export default function PostsClient({ posts: initialPosts }: PostsClientProps) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const onDelete = async (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setIsDeleting(postId);
      try {
        const response = await fetch(`/api/blog/${postId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete post.');
        }

        setPosts((prev) => prev.filter((p) => p.id !== postId));
        toast.success('Post deleted successfully.');
      } catch (error) {
        toast.error('Something went wrong.');
      } finally {
        setIsDeleting(null);
      }
    }
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.author?.name || 'N/A'}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push(`/dashboard/admin/blog/${post.id}` as any)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(post.id)}
                  disabled={isDeleting === post.id}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}