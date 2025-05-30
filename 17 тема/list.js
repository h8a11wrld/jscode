import { getItems, removeItem } from './storage.js';
import { showLoader, hideLoader } from './loader.js';

document.addEventListener('DOMContentLoaded', () => {
  showLoader();
  setTimeout(() => {
    hideLoader();
    const table = document.querySelector('#itemsTable tbody');
    const addButton = document.querySelector('#addButton');

    const renderItems = () => {
      table.innerHTML = '';
      const items = getItems();
      items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.shelf}</td>
          <td>${item.weight}</td>
          <td>${item.time}</td>
          <td><button class="delete" data-index="${index}">Удалить</button></td>
        `;
        table.appendChild(row);
      });
    };

    table.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        const index = e.target.dataset.index;
        removeItem(index);
        renderItems();
      }
    });

    addButton.addEventListener('click', () => {
      window.location.href = 'add.html';
    });

    renderItems();
  }, 1000);
});
