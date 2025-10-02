'use server';

import { db } from '@/lib/db';
import { currentUser as getCurrentUser } from '@/lib/auth';
import ReviewForm from './review-form';
import ReviewList from './review-list';

interface ReviewSectionProps {
  productId: string;
}

const ReviewSection = async ({ productId }: ReviewSectionProps) => {
  const reviews = await db.review.findMany({
    where: { productId },
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  });

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
      : 0;

  const user = await getCurrentUser();
  const hasReviewed = user ? reviews.some((review) => review.userId === user.id) : false;

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        {averageRating > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
            <span className="text-gray-500">/ 5</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <ReviewList reviews={reviews} />
        </div>
        <div>
          {user && !hasReviewed ? (
            <ReviewForm productId={productId} />
          ) : (
            <p className="text-gray-500">
              {hasReviewed
                ? 'You have already reviewed this product.'
                : 'You must be logged in to leave a review.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;