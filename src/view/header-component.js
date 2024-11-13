import {AbstractComponent} from '../framework/view/abstract-component.js';

function createHeaderComponentTemplate() {
    return `<header><h1>Моя книжная полка</h1></header>`;
}

export default class HeaderComponent extends AbstractComponent {
    get template() {
        return createHeaderComponentTemplate();
    }
}