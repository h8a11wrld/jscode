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

  // Метод для создания HTML-карточки с кнопкой "Изменить"
  createCard() {
    const card = super.createCard(); // Используем метод createCard из родительского класса

    // Добавляем статус доставки
    const statusElement = document.createElement('p');
    statusElement.textContent = `Статус: ${this.status}`;
    statusElement.style.color = this.getStatusColor();

    // Добавляем кнопку редактирования
    const editButton = document.createElement('button');
    editButton.textContent = 'Изменить';
    editButton.style.marginTop = '10px';
    editButton.addEventListener('click', () => this.openEditModal());

    card.appendChild(statusElement);
    card.appendChild(editButton);

    return card;
  }

  // Метод для получения цвета статуса
  getStatusColor() {
    switch (this.status) {
      case 'delivered':
        return 'green';
      case 'canceled':
        return 'red';
      default:
        return 'blue'; // delivery
    }
  }

  // Метод для отображения окна редактирования
  openEditModal() {
    // Создаём модальное окно
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    modal.style.zIndex = 1000;

    // Поля редактирования
    const nameInput = this.createInputField('Имя', this.customerName);
    const addressInput = this.createInputField('Адрес', this.address);
    const distanceInput = this.createInputField('Расстояние', this.distance);

    // Выпадающий список для статуса
    const statusSelect = document.createElement('select');
    ['delivery', 'delivered', 'canceled'].forEach((status) => {
      const option = document.createElement('option');
      option.value = status;
      option.textContent = status;
      if (status === this.status) option.selected = true;
      statusSelect.appendChild(option);
    });

    // Кнопка "Сохранить"
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить';
    saveButton.addEventListener('click', () => {
      this.customer = nameInput.value;
      this.deliveryAddress = addressInput.value;
      this.deliveryDistance = distanceInput.value;
      this.deliveryStatus = statusSelect.value;

      // Перерисовываем карточки и закрываем модальное окно
      document.getElementById('deliveryContainer').innerHTML = '';
      renderDeliveries(deliveryArr);
      document.body.removeChild(modal);
    });

    modal.appendChild(nameInput);
    modal.appendChild(addressInput);
    modal.appendChild(distanceInput);
    modal.appendChild(statusSelect);
    modal.appendChild(saveButton);
    document.body.appendChild(modal);
  }

  // Метод для создания текстового поля
  createInputField(label, value) {
    const wrapper = document.createElement('div');
    wrapper.style.marginBottom = '10px';

    const inputLabel = document.createElement('label');
    inputLabel.textContent = `${label}:`;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    input.style.marginLeft = '10px';

    wrapper.appendChild(inputLabel);
    wrapper.appendChild(input);
    return wrapper;
  }
}
