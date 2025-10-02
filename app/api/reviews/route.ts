import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";

const reviewSchema = z.object({
  productId: z.string().cuid(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productId");

  if (!productId) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }

  try {
    const reviews = await db.review.findMany({
      where: { productId },
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("[REVIEWS_GET]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validation = reviewSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const { productId, rating, comment } = validation.data;

    // Check if the user has purchased the product before allowing a review
    const hasPurchased = await db.order.findFirst({
      where: {
        userId: user.id,
        status: "COMPLETED",
        orderItems: {
          some: {
            productId,
          },
        },
      },
    });

    if (!hasPurchased) {
      return NextResponse.json(
        { error: "You can only review products you have purchased." },
        { status: 403 }
      );
    }

    // Check if the user has already reviewed this product
    const existingReview = await db.review.findUnique({
      where: {
        userId_productId: {
          userId: user.id,
          productId,
        },
      },
    });

    if (existingReview) {
      return NextResponse.json(
        { error: "You have already reviewed this product." },
        { status: 409 }
      );
    }

    const newReview = await db.review.create({
      data: {
        userId: user.id,
        productId,
        rating,
        comment,
      },
    });

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error("[REVIEWS_POST]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}