export default class Delivery {
    constructor(customerName, address, distance) {
      this.customerName = customerName;
      this.address = address;
      this.distance = distance; // Расстояние в километрах
    }
  
    // Геттеры и сеттеры для изменения свойств
    get customer() {
      return this.customerName;
    }
  
    set customer(newName) {
      this.customerName = newName;
    }
  
    get deliveryAddress() {
      return this.address;
    }
  
    set deliveryAddress(newAddress) {
      this.address = newAddress;
    }
  
    get deliveryDistance() {
      return this.distance;
    }
  
    set deliveryDistance(newDistance) {
      this.distance = newDistance;
    }
  
    // Метод для создания HTML-карточки доставки
    createCard() {
      const card = document.createElement('div');
      card.classList.add('delivery-card');
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = `Покупатель: ${this.customerName}`;
  
      const addressElement = document.createElement('p');
      addressElement.textContent = `Адрес: ${this.address}`;
  
      const distanceElement = document.createElement('p');
      distanceElement.textContent = `Расстояние: ${this.distance} км`;
  
      card.appendChild(nameElement);
      card.appendChild(addressElement);
      card.appendChild(distanceElement);
  
      return card;
    }
  }
