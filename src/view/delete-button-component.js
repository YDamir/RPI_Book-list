import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class DeleteButtonComponent extends AbstractComponent {
  constructor({ onDelete }) {
    super();
    this._onDelete = onDelete;
    this.element.addEventListener('click', this._handleDeleteClick.bind(this));
  }

  get template() {
    return `<button class="delete-button">Удалить</button>`;
  }

  _handleDeleteClick(evt) {
    evt.preventDefault();
    this._onDelete();
  }
}
