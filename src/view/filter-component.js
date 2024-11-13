import {AbstractComponent} from '../framework/view/abstract-component.js';

export default class FilterComponent extends AbstractComponent {
    #onFilterChange = null;
  
    constructor({ onFilterChange }) {
      super();
      this.#onFilterChange = onFilterChange;
      this.element.addEventListener('change', this.#handleFilterChange.bind(this));
    }
  
    get template() {
      return `
        <div class="book-filter">
          <h2>Фильтровать</h2>
          <select id="genre-filter">
            <option value="all">Все</option>
            <option value="Fiction">Художественная</option>
            <option value="Science">Научная</option>
            <option value="Fantasy">Фантастика</option>
            <option value="Biography">Биография</option>
          </select>
        </div>
      `;
    }
  
    #handleFilterChange(event) {
      const selectedGenre = event.target.value;
      if (this.#onFilterChange) {
        this.#onFilterChange(selectedGenre);
      }
    }
}