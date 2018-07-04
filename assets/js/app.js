import search from './character-search';

const form = document.querySelectorAll('[data-component]');

form[0].addEventListener('submit', e => {
  e.preventDefault();

  const formComponent = e.target;

  const formData = new FormData(formComponent);

  search(formData.get('heroName'));
});