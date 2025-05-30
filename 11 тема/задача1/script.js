document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('survey-form');
    const result = document.getElementById('result');
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ratingInput = document.getElementById('rating');
    const ratingValue = document.getElementById('rating-value');
  
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
  
    // Обновление отображения значения ползунка
    ratingInput.addEventListener('input', () => {
      ratingValue.textContent = ratingInput.value;
    });
  
    // Валидация полей
    function validateForm() {
      let isValid = true;
  
      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Имя обязательно для заполнения.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }
  
      if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = 'Введите корректный email.';
        isValid = false;
      } else {
        emailError.textContent = '';
      }
  
      return isValid;
    }
  
    // Обработка отправки формы
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      if (!validateForm()) return;
  
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const gender = formData.get('gender');
      const rating = formData.get('rating');
      const interests = formData.getAll('interests');
      const comments = formData.get('comments');
  
      result.innerHTML = `
        <h2>Результаты опроса</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Пол:</strong> ${gender}</p>
        <p><strong>Оценка сервиса:</strong> ${rating}</p>
        <p><strong>Интересы:</strong> ${interests.length > 0 ? interests.join(', ') : 'Не выбрано'}</p>
        <p><strong>Комментарии:</strong> ${comments || 'Нет'}</p>
      `;
    });
  });
