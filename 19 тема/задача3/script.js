import EditDelivery from './EditDelivery.js';

// Инициализация списка доставок
const deliveryArr = [
  new EditDelivery('Ольга', 'ул. Вымыслов, д. 12', 8, 'delivery'),
  new EditDelivery('Дмитрий', 'ул. Задачная, д. 7', 3, 'delivered'),
  new EditDelivery('Оля', 'ул. Ткачей, д. 43', 11, 'canceled'),
];

// Контейнер для карточек
const deliveryContainer = document.getElementById('deliveryContainer');

// Контейнер для отображения общего расстояния
const distanceContainer = document.createElement('div');
distanceContainer.id = 'totalDistance';
distanceContainer.style.marginTop = '20px';
distanceContainer.style.fontSize = '18px';

// Кнопка для расчёта общего расстояния
const calculateButton = document.createElement('button');
calculateButton.textContent = 'Рассчитать общее расстояние';
calculateButton.style.marginTop = '20px';
calculateButton.style.display = 'block';
calculateButton.addEventListener('click', () => {
  const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
  distanceContainer.textContent = `Общее расстояние: ${totalDistance} км`;
});

document.body.appendChild(calculateButton);
document.body.appendChild(distanceContainer);

// Функция для отображения списка доставок
function renderDeliveries(deliveries) {
  deliveryContainer.innerHTML = ''; // Очистка контейнера

  deliveries.forEach((delivery) => {
    const card = delivery.createCard();
    deliveryContainer.appendChild(card);
  });
}

// Отображение доставок
renderDeliveries(deliveryArr);
