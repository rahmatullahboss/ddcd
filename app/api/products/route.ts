import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { currentRole, currentUser } from '@/lib/auth';

export async function GET() {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error('[PRODUCTS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const role = await currentRole();
    const user = await currentUser();

    if (role !== 'ADMIN' || !user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { name, description, price, imageUrl, category, digitalFileUrl } = await req.json();

    if (!name || !description || !price) {
      return new NextResponse('Name, description, and price are required', { status: 400 });
    }

    const product = await db.product.create({
      data: {
        name,
        description,
        price,
        imageUrl,
        category,
        digitalFileUrl,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error('[PRODUCTS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}