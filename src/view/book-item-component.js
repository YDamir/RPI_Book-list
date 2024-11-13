import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class BookItemComponent extends AbstractComponent {
  #book = null;

  constructor(book) {
    super();
    this.#book = book;
  }

  get template() {
    return `
      <li class="book-item">
        <div class="book-details">
          <span>Название: ${this.#book.title}</span>
          <span>Автор: ${this.#book.author}</span>
        </div>
        <div class="book-actions"></div>
      </li>
    `;
  }

  get actionsContainer() {
    return this.element.querySelector('.book-actions');
  }
}
