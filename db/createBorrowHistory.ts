import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createBorrowHistory(members: any[], books: any[]) {
  const now = new Date();
  
  // Generate different dates for a more realistic database
  const past30Days = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const past20Days = new Date(now.getTime() - 20 * 24 * 60 * 60 * 1000);
  const past15Days = new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000);
  const past10Days = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000);
  const past5Days = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);
  const past3Days = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
  const past1Day = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000);
  
  // Due dates (typically 14 days from borrow date)
  const dueFromPast30 = new Date(past30Days.getTime() + 14 * 24 * 60 * 60 * 1000);
  const dueFromPast20 = new Date(past20Days.getTime() + 14 * 24 * 60 * 60 * 1000);
  const dueFromPast15 = new Date(past15Days.getTime() + 14 * 24 * 60 * 60 * 1000);
  const dueFromPast10 = new Date(past10Days.getTime() + 14 * 24 * 60 * 60 * 1000);
  const dueFromPast5 = new Date(past5Days.getTime() + 14 * 24 * 60 * 60 * 1000);
  const dueFromPast3 = new Date(past3Days.getTime() + 14 * 24 * 60 * 60 * 1000);
  const dueFromPast1 = new Date(past1Day.getTime() + 14 * 24 * 60 * 60 * 1000);
  const dueFromNow = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

  // Return dates (some books are returned, some are still out)
  const returnPast25Days = new Date(now.getTime() - 25 * 24 * 60 * 60 * 1000);
  const returnPast18Days = new Date(now.getTime() - 18 * 24 * 60 * 60 * 1000);
  const returnPast12Days = new Date(now.getTime() - 12 * 24 * 60 * 60 * 1000);
  const returnPast8Days = new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000);
  const returnPast2Days = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  const returnYesterday = new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000);

  const histories = [
    // Some completed borrows (returned)
    {
      memberId: members[0].id,
      bookId: books[0].id,
      borrowDate: past30Days,
      dueDate: dueFromPast30,
      returnDate: returnPast25Days,
    },
    {
      memberId: members[1].id,
      bookId: books[1].id,
      borrowDate: past20Days,
      dueDate: dueFromPast20,
      returnDate: returnPast18Days,
    },
    {
      memberId: members[2].id,
      bookId: books[2].id,
      borrowDate: past15Days,
      dueDate: dueFromPast15,
      returnDate: returnPast12Days,
    },
    {
      memberId: members[3].id,
      bookId: books[3].id,
      borrowDate: past10Days,
      dueDate: dueFromPast10,
      returnDate: returnPast8Days,
    },
    {
      memberId: members[4].id,
      bookId: books[4].id,
      borrowDate: past5Days,
      dueDate: dueFromPast5,
      returnDate: returnPast2Days,
    },
    {
      memberId: members[5].id,
      bookId: books[5].id,
      borrowDate: past3Days,
      dueDate: dueFromPast3,
      returnDate: returnYesterday,
    },
    
    // Currently borrowed books (not returned yet)
    {
      memberId: members[6].id,
      bookId: books[6].id,
      borrowDate: past5Days,
      dueDate: dueFromPast5,
      returnDate: null,
    },
    {
      memberId: members[7].id,
      bookId: books[7].id,
      borrowDate: past3Days,
      dueDate: dueFromPast3,
      returnDate: null,
    },
    {
      memberId: members[8].id,
      bookId: books[8].id,
      borrowDate: past1Day,
      dueDate: dueFromPast1,
      returnDate: null,
    },
    {
      memberId: members[9].id,
      bookId: books[9].id,
      borrowDate: now,
      dueDate: dueFromNow,
      returnDate: null,
    },
    
    // More borrow history with different member-book combinations
    {
      memberId: members[0].id,
      bookId: books[10].id,
      borrowDate: past15Days,
      dueDate: dueFromPast15,
      returnDate: returnPast12Days,
    },
    {
      memberId: members[1].id,
      bookId: books[11].id,
      borrowDate: past10Days,
      dueDate: dueFromPast10,
      returnDate: null, // overdue book
    },
    {
      memberId: members[2].id,
      bookId: books[12].id,
      borrowDate: past5Days,
      dueDate: dueFromPast5,
      returnDate: returnPast2Days,
    },
    {
      memberId: members[3].id,
      bookId: books[13].id,
      borrowDate: now,
      dueDate: dueFromNow,
      returnDate: null,
    },
    {
      memberId: members[4].id,
      bookId: books[14].id,
      borrowDate: past20Days,
      dueDate: dueFromPast20,
      returnDate: returnPast18Days,
    },
    {
      memberId: members[5].id,
      bookId: books[15].id,
      borrowDate: past15Days,
      dueDate: dueFromPast15,
      returnDate: null, // overdue book
    },
    {
      memberId: members[6].id,
      bookId: books[16].id,
      borrowDate: past10Days,
      dueDate: dueFromPast10,
      returnDate: returnPast8Days,
    },
    {
      memberId: members[7].id,
      bookId: books[17].id,
      borrowDate: past5Days,
      dueDate: dueFromPast5,
      returnDate: null,
    },
    {
      memberId: members[8].id,
      bookId: books[18].id,
      borrowDate: past3Days,
      dueDate: dueFromPast3,
      returnDate: null,
    },
    {
      memberId: members[9].id,
      bookId: books[19].id,
      borrowDate: past1Day,
      dueDate: dueFromPast1,
      returnDate: null,
    },
  ];

  const createdHistories = [];

  for (const history of histories) {
    const result = await prisma.borrowHistory.create({
      data: history,
    });
    createdHistories.push(result);
  }

  console.log('Borrow histories created:', createdHistories.length);
  return createdHistories;
}