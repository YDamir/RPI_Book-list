import HeaderComponent from './view/header-component.js';
import BookFormComponent from './view/book-form-component.js';
import FilterComponent from './view/filter-component.js';
import BookListComponent from './view/book-list-component.js';
import BooksModel from './model/books-model.js';
import BooksBoardPresenter from './presenter/books-board-presenter.js';
import { render, RenderPosition } from './framework/render.js';

const container = document.querySelector('.container');

const headerComponent = new HeaderComponent();
render(headerComponent, container, RenderPosition.AFTERBEGIN);

const formContainer = document.getElementById('form-container');
const booksModel = new BooksModel();

const booksBoardPresenter = new BooksBoardPresenter({
  boardContainer: document.getElementById('book-list-container'),
  booksModel: booksModel,
});

const bookFormComponent = new BookFormComponent({
  onSubmit: (bookData) => booksBoardPresenter.handleBookUpdate('add', bookData),
});
render(bookFormComponent, formContainer, RenderPosition.BEFOREEND);

const filterContainer = document.getElementById('filter-container');
const filterComponent = new FilterComponent({
  onFilterChange: (genre) => booksBoardPresenter.setFilter(genre),
});
render(filterComponent, filterContainer, RenderPosition.BEFOREEND);


booksBoardPresenter.init();
