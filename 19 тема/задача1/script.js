import Delivery from './Delivery.js';

// Инициализация списка доставок
const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11),
];

// Получаем контейнер для карточек
const deliveryContainer = document.getElementById('deliveryContainer');

// Функция для отображения списка доставок
function renderDeliveries(deliveries) {
  deliveryContainer.innerHTML = ''; // Очистка контейнера

  deliveries.forEach((delivery) => {
    const card = delivery.createCard();
    deliveryContainer.appendChild(card);
  });
}

// Отображаем список доставок
renderDeliveries(deliveryArr);
