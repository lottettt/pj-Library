import  * as repo  from '../repository/bookRepository'

export async function getAllBooks() {
    return repo.getAllBooks();
}