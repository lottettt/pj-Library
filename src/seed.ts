import { PrismaClient } from '@prisma/client';
import { createAuthor } from '../db/createAuthor';
import { createBook } from '../db/createBook';
import { createMember } from '../db/createMember';
import { createBorrowHistory } from '../db/createBorrowHistory';

const prisma = new PrismaClient();

async function main() {
  const authors = await createAuthor();
  const books = await createBook(authors);
  const members = await createMember();
  await createBorrowHistory(members, books);

  console.log('Database seeding completed.');
}

main().finally(() => prisma.$disconnect());
