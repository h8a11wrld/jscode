import Delivery from './Delivery.js';

export default class EditDelivery extends Delivery {
  constructor(customerName, address, distance, status = 'delivery') {
    super(customerName, address, distance);
    this.status = status; // delivery, delivered, canceled
  }

  // Геттеры и сеттеры для статуса
  get deliveryStatus() {
    return this.status;
  }

  set deliveryStatus(newStatus) {
    this.status = newStatus;
  }

  // Метод для создания HTML-карточки
  createCard() {
    const card = super.createCard();

    const statusElement = document.createElement('p');
    statusElement.textContent = `Статус: ${this.status}`;
    statusElement.style.color = this.getStatusColor();

    card.appendChild(statusElement);
    return card;
  }

  getStatusColor() {
    switch (this.status) {
      case 'delivered':
        return 'green';
      case 'canceled':
        return 'red';
      default:
        return 'blue';
    }
  }

  // Статический метод для расчёта общего расстояния
  static getTotalDistance(deliveries) {
    return deliveries
      .filter((delivery) => delivery.status !== 'canceled') // Исключаем отменённые доставки
      .reduce((total, delivery) => total + Number(delivery.distance), 0);
  }
}
