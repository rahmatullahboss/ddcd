import PostForm from '../[postId]/_components/post-form';

export default function NewPostPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PostForm initialData={null} />
    </div>
  );
}