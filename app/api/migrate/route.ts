import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function POST() {
  try {
    // Only allow this in development environment
    if (process.env.NODE_ENV === 'production') {
      return new NextResponse('Not allowed in production', { status: 403 });
    }

    // Run Prisma migrations
    const { stdout, stderr } = await execPromise('npx prisma migrate dev --name init');

    if (stderr) {
      console.error('Migration error:', stderr);
      return new NextResponse(`Migration failed: ${stderr}`, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'Migrations completed successfully', 
      output: stdout 
    });
  } catch (error) {
    console.error('Migration error:', error);
    return new NextResponse(`Migration failed: ${error}`, { status: 500 });
  }
}