import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class NoBookComponent extends AbstractComponent {
  get template() {
    return `<p class="no-books">На данный момент книги отсутствуют.</p>`;
  }
}