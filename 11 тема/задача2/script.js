document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('delivery-form');
    const productList = document.getElementById('product-list');
  
    const nameInput = document.getElementById('product-name');
    const weightInput = document.getElementById('product-weight');
    const distanceInput = document.getElementById('delivery-distance');
  
    const nameError = document.getElementById('name-error');
    const weightError = document.getElementById('weight-error');
    const distanceError = document.getElementById('distance-error');
  
    // Валидация формы
    function validateForm() {
      let isValid = true;
  
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Название товара обязательно.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }
  
      if (weightInput.value <= 0 || weightInput.value === '') {
        weightError.textContent = 'Вес должен быть положительным.';
        isValid = false;
      } else {
        weightError.textContent = '';
      }
  
      if (distanceInput.value <= 0 || distanceInput.value === '') {
        distanceError.textContent = 'Расстояние должно быть положительным.';
        isValid = false;
      } else {
        distanceError.textContent = '';
      }
  
      return isValid;
    }
  
    // Обработка отправки формы
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      if (!validateForm()) return;
  
      const name = nameInput.value.trim();
      const weight = parseFloat(weightInput.value);
      const distance = parseFloat(distanceInput.value);
  
      // Расчёт стоимости доставки
      const deliveryCost = ((weight * distance) / 10).toFixed(2);
  
      // Добавление товара в список
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${weight} кг</td>
        <td>${distance} км</td>
        <td>${deliveryCost} руб.</td>
      `;
      productList.appendChild(newRow);
  
      // Очистка формы
      form.reset();
    });
  });
  
