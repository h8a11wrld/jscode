// Находим все миниатюры и блок для отображения полноразмерного изображения
const thumbnails = document.querySelectorAll('.thumbnail');
const fullImage = document.getElementById('full-image');

// Добавляем обработчик события для каждой миниатюры
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const fullImageUrl = thumbnail.getAttribute('data-full'); // Получаем URL большого изображения
    fullImage.src = fullImageUrl; // Устанавливаем URL для большого изображения
    fullImage.alt = thumbnail.alt; // Устанавливаем описание изображения
  });
});
