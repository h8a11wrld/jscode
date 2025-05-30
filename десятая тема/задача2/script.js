// Находим кнопки и список
const addButton = document.getElementById('add-item');
const removeButton = document.getElementById('remove-item');
const dynamicList = document.getElementById('dynamic-list');

// Обработчик для добавления нового элемента
addButton.addEventListener('click', () => {
  const newListItem = document.createElement('li'); // Создаем новый элемент <li>
  newListItem.textContent = 'Новый элемент списка'; // Устанавливаем текст
  dynamicList.appendChild(newListItem); // Добавляем элемент в <ul>
});

// Обработчик для удаления последнего элемента
removeButton.addEventListener('click', () => {
  const lastItem = dynamicList.lastElementChild; // Получаем последний элемент <li>
  if (lastItem) {
    dynamicList.removeChild(lastItem); // Удаляем последний элемент
  } else {
    alert('Список пуст!'); // Сообщение, если список пуст
  }
});
