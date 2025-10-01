import { db } from '@/lib/db';
import PostForm from './_components/post-form';

interface PostPageProps {
  params: {
    postId: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await db.post.findUnique({
    where: {
      id: params.postId,
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <PostForm initialData={post} />
    </div>
  );
}