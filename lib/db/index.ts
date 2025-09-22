import { PrismaClient } from '@prisma/client'

// Declare a global variable for the Prisma client
declare global {
  var prisma: PrismaClient | undefined
}

// Create or reuse the Prisma client
export const db = globalThis.prisma || new PrismaClient()

// In development, we want to reuse the client across hot reloads
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db
}