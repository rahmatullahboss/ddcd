import { db } from '@/lib/db';
import PostForm from './_components/post-form';

interface PostPageProps {
  params: Promise<{
    postId: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  // Resolve the params promise
  const { postId } = await params;
  
  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <PostForm initialData={post} />
    </div>
  );
}