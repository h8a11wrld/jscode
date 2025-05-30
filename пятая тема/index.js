// Функция для добавления товара в корзину
function addToCart(productName) {
  // Находим элемент списка корзины
  const cart = document.querySelector('#cart');

  // Создаём новый элемент списка
  const cartItem = document.createElement('li');

  // Добавляем текст с названием товара в элемент списка
  cartItem.textContent = productName;

  // Добавляем класс для стилизации (если требуется)
  cartItem.classList.add('cart-item');

  // Добавляем элемент списка в корзину
  cart.appendChild(cartItem);
}

// Пример расширенной настройки, если добавить товары и кнопки динамически
function initializeCatalog(products) {
  const productList = document.querySelector('#product-list');

  products.forEach((product) => {
      const listItem = document.createElement('li');
      
      const productSpan = document.createElement('span');
      productSpan.textContent = product;

      const addButton = document.createElement('button');
      addButton.textContent = 'Добавить в корзину';
      addButton.onclick = () => addToCart(product);

      listItem.appendChild(productSpan);
      listItem.appendChild(addButton);

      productList.appendChild(listItem);
  });
}

// Инициализация каталога с товарами
initializeCatalog(['Товар 1', 'Товар 2', 'Товар 3']);
