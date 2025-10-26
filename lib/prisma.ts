import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prismaBase: PrismaClientSingleton | undefined
}

// Base client for adapters (without extensions)
export const prismaBase = globalForPrisma.prismaBase ?? prismaClientSingleton()

// Extended client for queries with Accelerate
export const prisma = prismaBase.$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaBase = prismaBase