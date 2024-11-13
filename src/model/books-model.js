import { books as initialBooks } from '../mock/books.js';

export default class BooksModel {
  #books = initialBooks;
  #observers = [];

  get books() {
    return this.#books;
  }

  addObserver(observer) {
    this.#observers.push(observer);
  }

  _notifyObservers() {
    this.#observers.forEach((observer) => observer());
  }

  addBook(newBook) {
    this.#books.push(newBook);
    this._notifyObservers();
  }

  deleteBook(bookId) {
    this.#books = this.#books.filter((book) => book.id !== bookId);
    this._notifyObservers();
  }

  editBook(updatedBook) {
    const index = this.#books.findIndex((book) => book.id === updatedBook.id);
    if (index !== -1) {
      this.#books[index] = updatedBook;
      this._notifyObservers();
    }
  }
}
