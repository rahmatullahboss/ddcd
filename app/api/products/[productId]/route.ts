import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { currentRole } from '@/lib/auth';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;
    
    if (!productId) {
      return new NextResponse('Product ID is required', { status: 400 });
    }

    const product = await db.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return new NextResponse('Product not found', { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('[PRODUCT_ID_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;
    
    const role = await currentRole();

    if (role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!productId) {
      return new NextResponse('Product ID is required', { status: 400 });
    }

    const values = await req.json();

    const product = await db.product.update({
      where: {
        id: productId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error('[PRODUCT_ID_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    const { productId } = await params;
    
    const role = await currentRole();

    if (role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!productId) {
      return new NextResponse('Product ID is required', { status: 400 });
    }

    const product = await db.product.delete({
      where: {
        id: productId,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error('[PRODUCT_ID_DELETE]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}