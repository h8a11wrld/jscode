import EditDelivery from './EditDelivery.js';

// Инициализация списка доставок
const deliveryArr = [
  new EditDelivery('Ольга', 'ул. Вымыслов, д. 12', 8, 'delivery'),
  new EditDelivery('Дмитрий', 'ул. Задачная, д. 7', 3, 'delivered'),
  new EditDelivery('Оля', 'ул. Ткачей, д. 43', 11, 'canceled'),
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
