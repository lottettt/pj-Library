import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createAuthor() {
  const authors = [
    {
      firstName: 'George',
      lastName: 'Martin',
      organization: 'Fantasy House',
    },
    {
      firstName: 'Agatha',
      lastName: 'Christie',
      organization: 'Mystery Co.',
    },
    {
      firstName: 'J.K.',
      lastName: 'Rowling',
      organization: 'Bloomsbury Publishing',
    },
    {
      firstName: 'Stephen',
      lastName: 'King',
      organization: 'Scribner',
    },
    {
      firstName: 'Haruki',
      lastName: 'Murakami',
      organization: 'Shinchosha Publishing',
    },
    {
      firstName: 'Jane',
      lastName: 'Austen',
      organization: 'Penguin Classics',
    },
    {
      firstName: 'Ernest',
      lastName: 'Hemingway',
      organization: 'Scribner',
    },
    {
      firstName: 'Margaret',
      lastName: 'Atwood',
      organization: 'McClelland & Stewart',
    },
    {
      firstName: 'Neil',
      lastName: 'Gaiman',
      organization: 'HarperCollins',
    },
    {
      firstName: 'Gabriel',
      lastName: 'García Márquez',
      organization: 'Editorial Sudamericana',
    },
    {
      firstName: 'Toni',
      lastName: 'Morrison',
      organization: 'Knopf Doubleday',
    },
    {
      firstName: 'Chimamanda',
      lastName: 'Ngozi Adichie',
      organization: 'Alfred A. Knopf',
    }
  ];

  const createdAuthors = [];

  for (const author of authors) {
    const result = await prisma.author.create({
      data: author,
    });
    createdAuthors.push(result);
  }

  console.log('Authors created:', createdAuthors.length);
  return createdAuthors;
}
