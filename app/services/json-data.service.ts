import { Book } from '../models/book';
import { DataAccessInterface } from './data-access.interface';

export class JsonDataService implements DataAccessInterface {
  books: Book[]

  constructor() {
    const storageData = this.getStorageData()
    this.books = storageData ? storageData: []
  }

  getBooks(): Book[] {
    return this.books;
  }

  createBook(book: Book): Book[] {
    this.books.unshift(book);
    localStorage.setItem('BOOKS', JSON.stringify(this.books));
    return this.books;
  }

  updateBook(book: Book): Book[] {
    const index = this.books.findIndex(oldBook => oldBook.id === book.id);
    this.books[index] = book;
    localStorage.setItem('BOOKS', JSON.stringify(this.books));
    return this.books;
  }

  deleteBook(book: Book): Book[] {
    const index = this.books.findIndex(oldBook => oldBook.id === book.id);
    this.books.splice(index, 1)
    localStorage.setItem('BOOKS', JSON.stringify(this.books));
    return this.books;
  }

  private getStorageData() {
    const storageData = localStorage.getItem('BOOKS');
    if(storageData) return JSON.parse(storageData)
  }

}


