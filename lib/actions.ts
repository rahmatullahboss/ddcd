'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { db } from './db';
import { currentUser as getCurrentUser } from './auth';

const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, 'Comment must be at least 10 characters.'),
  productId: z.string(),
});

export async function submitReview(values: z.infer<typeof reviewSchema>) {
  const validatedFields = reviewSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields.' };
  }

  const user = await getCurrentUser();

  if (!user) {
    return { error: 'You must be logged in to leave a review.' };
  }

  const { productId, rating, comment } = validatedFields.data;

  // Verify the user has purchased the product (optional but good practice)
  // For now, we'll just check if they've already reviewed it.
  const existingReview = await db.review.findFirst({
    where: {
      userId: user.id,
      productId: productId,
    },
  });

  if (existingReview) {
    return { error: 'You have already reviewed this product.' };
  }

  try {
    await db.review.create({
      data: {
        productId,
        userId: user.id!, // Add type assertion to tell TypeScript that user.id is not undefined
        rating,
        comment,
      },
    });

    revalidatePath(`/shop/${productId}`);
    return { success: 'Review submitted successfully!' };
  } catch (error) {
    return { error: 'Something went wrong. Please try again.' };
  }
}