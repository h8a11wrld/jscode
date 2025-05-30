// Исходный массив с ценами
const prices = [100, 500, 250, 750, 300];

// Ссылки на элементы DOM
const priceList = document.getElementById('price-list');
const sortAscButton = document.getElementById('sort-asc');
const sortDescButton = document.getElementById('sort-desc');

// Функция для отображения цен на странице
function displayPrices(pricesArray) {
  // Очищаем текущий список
  priceList.innerHTML = '';

  // Создаем элементы <li> для каждого элемента массива
  pricesArray.forEach(price => {
    const listItem = document.createElement('li');
    listItem.textContent = `${price} ₽`; // Добавляем валюту для красоты
    priceList.appendChild(listItem);
  });
}

// Функция для сортировки по возрастанию
function sortPricesAscending() {
  prices.sort((a, b) => a - b); // Сортируем массив по возрастанию
  displayPrices(prices); // Обновляем отображение
}

// Функция для сортировки по убыванию
function sortPricesDescending() {
  prices.sort((a, b) => b - a); // Сортируем массив по убыванию
  displayPrices(prices); // Обновляем отображение
}

// Привязываем обработчики событий к кнопкам
sortAscButton.addEventListener('click', sortPricesAscending);
sortDescButton.addEventListener('click', sortPricesDescending);

// Изначально отображаем список цен
displayPrices(prices);
