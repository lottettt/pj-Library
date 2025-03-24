import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createMember() {
  const members = [
    {
      memberCode: 'M1001',
      firstName: 'Emily',
      lastName: 'Clark',
      phoneNumber: '555-1234',
    },
    {
      memberCode: 'M1002',
      firstName: 'John',
      lastName: 'Smith',
      phoneNumber: '555-5678',
    },
    {
      memberCode: 'M1003',
      firstName: 'Maria',
      lastName: 'Rodriguez',
      phoneNumber: '555-2468',
    },
    {
      memberCode: 'M1004',
      firstName: 'David',
      lastName: 'Wong',
      phoneNumber: '555-3698',
    },
    {
      memberCode: 'M1005',
      firstName: 'Sarah',
      lastName: 'Johnson',
      phoneNumber: '555-7890',
    },
    {
      memberCode: 'M1006',
      firstName: 'Michael',
      lastName: 'Brown',
      phoneNumber: '555-4321',
    },
    {
      memberCode: 'M1007',
      firstName: 'Priya',
      lastName: 'Patel',
      phoneNumber: '555-8765',
    },
    {
      memberCode: 'M1008',
      firstName: 'James',
      lastName: 'Wilson',
      phoneNumber: '555-9876',
    },
    {
      memberCode: 'M1009',
      firstName: 'Linda',
      lastName: 'Garcia',
      phoneNumber: '555-6543',
    },
    {
      memberCode: 'M1010',
      firstName: 'Robert',
      lastName: 'Miller',
      phoneNumber: '555-2345',
    }
  ];

  const createdMembers = [];

  for (const member of members) {
    const result = await prisma.member.create({
      data: member,
    });
    createdMembers.push(result);
  }

  console.log('Members created:', createdMembers.length);
  return createdMembers;
}