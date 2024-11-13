import {AbstractComponent} from '../framework/view/abstract-component.js';

export default class BookFormComponent extends AbstractComponent {
    #onSubmit = null;
  
    constructor({ onSubmit }) {
      super();
      this.#onSubmit = onSubmit;
      this.element.querySelector('form').addEventListener('submit', this.#handleSubmit.bind(this));
    }
  
    get template() {
      return `
        <div class="book-form">
          <h2>Добавить новую книгу</h2>
          <form id="book-form">
            <input type="text" id="book-title" placeholder="Название книги" required />
            <input type="text" id="book-author" placeholder="Автор" required />
            <select id="book-genre" required>
              <option value="">Выбрать жанр</option>
              <option value="Fiction">Художественная</option>
              <option value="Science">Научная</option>
              <option value="Fantasy">Фантастика</option>
              <option value="Biography">Биография</option>
            </select>
            <button type="submit">Добавить книгу</button>
          </form>
        </div>
      `;
    }
  
    #handleSubmit(event) {
      event.preventDefault();
      const title = this.element.querySelector('#book-title').value;
      const author = this.element.querySelector('#book-author').value;
      const genre = this.element.querySelector('#book-genre').value;
  
      if (this.#onSubmit) {
        this.#onSubmit({ title, author, genre });
      }
  
      // Сбрасываем форму после отправки
      event.target.reset();
    }
  }