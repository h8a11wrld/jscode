import { addItem } from './storage.js';
import { showLoader, hideLoader } from './loader.js';

document.addEventListener('DOMContentLoaded', () => {
  showLoader();
  setTimeout(() => {
    hideLoader();

    const form = document.querySelector('#addForm');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value.trim();
      const shelf = document.querySelector('#shelf').value.trim();
      const weight = document.querySelector('#weight').value.trim();
      const time = document.querySelector('#time').value.trim();

      if (!name || !shelf || !weight || !time) {
        alert('Заполните все поля');
        return;
      }

      addItem({ name, shelf, weight, time });
      window.location.href = 'index.html';
    });
  }, 1000);
});
