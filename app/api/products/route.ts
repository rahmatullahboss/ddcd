import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";
import { currentRole } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const sortBy = searchParams.get("sortBy");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const searchQuery = searchParams.get("search");

  try {
    const where: any = {};

    if (category) {
      where.category = { name: category };
    }

    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = parseFloat(minPrice);
      if (maxPrice) where.price.lte = parseFloat(maxPrice);
    }

    if (searchQuery) {
      where.OR = [
        { name: { contains: searchQuery, mode: "insensitive" } },
        { description: { contains: searchQuery, mode: "insensitive" } },
      ];
    }

    const orderBy: any = {};

    if (sortBy === "price-asc") {
      orderBy.price = "asc";
    } else if (sortBy === "price-desc") {
      orderBy.price = "desc";
    } else if (sortBy === "rating-desc") {
      orderBy.reviews = { _count: "desc" };
    } else {
      orderBy.createdAt = "desc";
    }

    const products = await db.product.findMany({
      where,
      include: {
        images: true,
        category: true,
        reviews: {
          select: {
            rating: true,
          },
        },
      },
      orderBy,
    });

    // Calculate average rating for each product
    const productsWithAvgRating = products.map((product) => {
      const totalRating = product.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      const avgRating =
        product.reviews.length > 0
          ? totalRating / product.reviews.length
          : 0;
      // eslint-disable-next-line no-unused-vars
      const { reviews, ...rest } = product;
      return {
        ...rest,
        avgRating: parseFloat(avgRating.toFixed(1)),
        reviewCount: product.reviews.length,
      };
    });

    return NextResponse.json(productsWithAvgRating);
  } catch (error) {
    console.error("[PRODUCTS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const role = await currentRole();

    if (role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const {
      name,
      description,
      price,
      stock,
      categoryId,
      images,
    } = await req.json();

    if (!name || !description || !price || !categoryId || !images || images.length === 0) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const product = await db.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock, 10),
        categoryId,
        images: {
          create: images.map((img: { imageUrl: string }) => ({
            imageUrl: img.imageUrl,
          })),
        },
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("[PRODUCTS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}