import * as repo from '../repository/bookRepository';

export async function getAllBooks() {
    return repo.getAllBooks();
}

export async function searchBooksByTitle(title: string) {
    return repo.searchBooksByTitle(title);
}