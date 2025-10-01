import Link from 'next/link';
import { Post } from '@prisma/client';
import Image from 'next/image';

type PostWithAuthor = Post & {
    author: {
        name: string | null;
    } | null;
};

interface PostCardProps {
  post: PostWithAuthor;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link href={`/blog/${post.id}`} className="block group">
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl || '/placeholder.png'}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          {post.category && (
            <p className="text-primary font-semibold text-sm mb-2">{post.category}</p>
          )}
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{post.title}</h3>
          <div className="mt-auto">
            <p className="text-sm text-gray-500">
              By {post.author?.name || 'Unknown Author'}
            </p>
            <p className="text-sm text-gray-400">
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;