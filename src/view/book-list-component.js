import {AbstractComponent} from '../framework/view/abstract-component.js';

function createBookListComponentTemplate() {
    return `
        <div class="book-list">
            <h2>Книги</h2>
            <ul id="book-list"></ul>
        </div>
    `;
}

export default class BookListComponent extends AbstractComponent {
    get template() {
        return createBookListComponentTemplate();
    }
}