import * as repo from '../repository/bookRepository';

export async function getAllBooks() {
    return repo.getAllBooks();
}

export async function searchBooksByTitle(title: string) {
    return repo.searchBooksByTitle(title);
}

export async function getBooksDueOnDate(date: Date) {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);

    return repo.getBookDueOnDate(start, end);
}