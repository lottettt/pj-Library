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

export function getBookDueOnDate(start: Date, end: Date) {
  return prisma.book.findMany ({
    where: {
      dueDate: {
        gte: start,
        lte: end
      }
    },
    include: {
      author: true,
      checkout: true
    }
  })
}

export function getNotReturnedBooks() {
  return prisma.book.findMany({
    where: {
      returnDate: null,
    },
  include: { book:true, number: true }
})
}