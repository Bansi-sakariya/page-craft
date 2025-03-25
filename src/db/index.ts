import { PrismaClient } from '@prisma/client';

declare global {
  // Ensuring the global type includes prismaGlobal
  var prismaGlobal: PrismaClient | undefined;
}

const prismaClientSingleton = (): PrismaClient => {
  return new PrismaClient();
};

// Use existing global Prisma instance in development, otherwise create a new one
const prisma: PrismaClient = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// Avoid creating multiple instances in development
if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}
