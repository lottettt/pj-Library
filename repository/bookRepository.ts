import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export function getAllBooks() {
  return prisma.book.findMany({ 
    include: { 
      author: true 
    } 
  });
}

export function searchBooksByTitle(title: string) {
  return prisma.book.findMany({
    where: {
      title: {
        contains: title,
        mode: 'insensitive',
      },
    },
    include: { 
      author: true 
    }
  });
}