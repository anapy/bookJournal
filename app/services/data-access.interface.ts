import { Book } from "../models/book"

export interface DataAccessInterface {
  getBooks(): Book[];
  createBook(book: Book): Book[];
  updateBook(book: Book): Book[];
  deleteBook(book: Book): Book[];
}