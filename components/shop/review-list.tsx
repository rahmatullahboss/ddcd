import { Review, User } from '@prisma/client';
import { Star } from 'lucide-react';
import Image from 'next/image';

type ReviewWithUser = Review & { user: User };

interface ReviewListProps {
  reviews: ReviewWithUser[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  if (reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet. Be the first to review!</p>;
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="flex gap-4 border-b pb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={review.user.image || '/default-avatar.png'}
              alt={review.user.name || 'User avatar'}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{review.user.name}</h4>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
            <p className="mt-2 text-gray-700">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;