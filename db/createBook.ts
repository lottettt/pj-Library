import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createBook(authors: any[]) {
  const books = [
    {
      title: 'A Game of Thrones',
      isbn: '9780007448036',
      category: 'Fantasy',
      authorId: authors[0].id, // George Martin
    },
    {
      title: 'A Clash of Kings',
      isbn: '9780553108033',
      category: 'Fantasy',
      authorId: authors[0].id, // George Martin
    },
    {
      title: 'Murder on the Orient Express',
      isbn: '9780062073495',
      category: 'Mystery',
      authorId: authors[1].id, // Agatha Christie
    },
    {
      title: 'And Then There Were None',
      isbn: '9780062073471',
      category: 'Mystery',
      authorId: authors[1].id, // Agatha Christie
    },
    {
      title: 'Harry Potter and the Philosopher\'s Stone',
      isbn: '9780747532743',
      category: 'Fantasy',
      authorId: authors[2].id, // J.K. Rowling
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      isbn: '9780747538486',
      category: 'Fantasy',
      authorId: authors[2].id, // J.K. Rowling
    },
    {
      title: 'The Shining',
      isbn: '9780307743657',
      category: 'Horror',
      authorId: authors[3].id, // Stephen King
    },
    {
      title: 'It',
      isbn: '9781501142970',
      category: 'Horror',
      authorId: authors[3].id, // Stephen King
    },
    {
      title: 'Norwegian Wood',
      isbn: '9780375704024',
      category: 'Literary Fiction',
      authorId: authors[4].id, // Haruki Murakami
    },
    {
      title: 'Kafka on the Shore',
      isbn: '9781400079278',
      category: 'Literary Fiction',
      authorId: authors[4].id, // Haruki Murakami
    },
    {
      title: 'Pride and Prejudice',
      isbn: '9780141439518',
      category: 'Classic',
      authorId: authors[5].id, // Jane Austen
    },
    {
      title: 'Sense and Sensibility',
      isbn: '9780141439662',
      category: 'Classic',
      authorId: authors[5].id, // Jane Austen
    },
    {
      title: 'The Old Man and the Sea',
      isbn: '9780684801223',
      category: 'Literary Fiction',
      authorId: authors[6].id, // Ernest Hemingway
    },
    {
      title: 'For Whom the Bell Tolls',
      isbn: '9780684803357',
      category: 'Literary Fiction',
      authorId: authors[6].id, // Ernest Hemingway
    },
    {
      title: 'The Handmaid\'s Tale',
      isbn: '9780385490818',
      category: 'Dystopian',
      authorId: authors[7].id, // Margaret Atwood
    },
    {
      title: 'Oryx and Crake',
      isbn: '9780385721677',
      category: 'Science Fiction',
      authorId: authors[7].id, // Margaret Atwood
    },
    {
      title: 'American Gods',
      isbn: '9780062572110',
      category: 'Fantasy',
      authorId: authors[8].id, // Neil Gaiman
    },
    {
      title: 'Good Omens',
      isbn: '9780060853976',
      category: 'Fantasy',
      authorId: authors[8].id, // Neil Gaiman
    },
    {
      title: 'One Hundred Years of Solitude',
      isbn: '9780060883287',
      category: 'Magical Realism',
      authorId: authors[9].id, // Gabriel García Márquez
    },
    {
      title: 'Love in the Time of Cholera',
      isbn: '9780307389732',
      category: 'Romance',
      authorId: authors[9].id, // Gabriel García Márquez
    },
    {
      title: 'Beloved',
      isbn: '9781400033416',
      category: 'Historical Fiction',
      authorId: authors[10].id, // Toni Morrison
    },
    {
      title: 'The Bluest Eye',
      isbn: '9780307278449',
      category: 'Literary Fiction',
      authorId: authors[10].id, // Toni Morrison
    },
    {
      title: 'Americanah',
      isbn: '9780307455925',
      category: 'Contemporary Fiction',
      authorId: authors[11].id, // Chimamanda Ngozi Adichie
    },
    {
      title: 'Half of a Yellow Sun',
      isbn: '9781400095209',
      category: 'Historical Fiction',
      authorId: authors[11].id, // Chimamanda Ngozi Adichie
    }
  ];

  const createdBooks = [];

  for (const book of books) {
    const result = await prisma.book.create({
      data: book,
    });
    createdBooks.push(result);
  }

  console.log('Books created:', createdBooks.length);
  return createdBooks;
}
