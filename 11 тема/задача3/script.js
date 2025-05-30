// Получаем элементы
const cardTextInput = document.getElementById('card-text');
const colorSelect = document.getElementById('color-select');
const card = document.getElementById('card');

// Функция для обновления текста на карте
cardTextInput.addEventListener('input', () => {
  card.textContent = cardTextInput.value || "Ваш текст здесь";
});

// Функция для изменения стилей поля ввода
cardTextInput.addEventListener('focus', () => {
  cardTextInput.style.borderColor = '#0078ff';
  cardTextInput.style.backgroundColor = '#e6f0ff';
});

cardTextInput.addEventListener('blur', () => {
  cardTextInput.style.borderColor = '#ccc';
  cardTextInput.style.backgroundColor = '#fff';
});

// Функция для изменения фона карты в зависимости от выбранного цвета
colorSelect.addEventListener('change', () => {
  const selectedColor = colorSelect.value;
  card.style.backgroundColor = selectedColor;
});
