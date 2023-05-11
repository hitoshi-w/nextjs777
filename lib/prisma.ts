import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

const client =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

// 開発環境では、ホットリロードするたびにクライアントが作成されるのを防ぐ
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;

export default client;
