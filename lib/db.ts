import { PrismaClient } from '@prisma/client'

/**
 * Singleton pattern for Prisma Client
 * Ensures only one instance of PrismaClient is created
 * Prevents connection pool exhaustion in development
 */
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
