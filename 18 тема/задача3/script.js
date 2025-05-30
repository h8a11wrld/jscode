// Мок-функция для загрузки изображений
function mockRequest(delay, images) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(images), delay * 1000);
    });
  }
  
  // Функция для отображения прогресс-бара
  function createProgressBar(container, time) {
    const progressBarWrapper = document.createElement('div');
    progressBarWrapper.classList.add('progress-bar-wrapper');
  
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
  
    progressBarWrapper.appendChild(progressBar);
    container.appendChild(progressBarWrapper);
  
    // Запускаем анимацию
    progressBar.style.transition = `transform ${time}s linear`;
    setTimeout(() => {
      progressBar.style.transform = 'scaleX(1)';
    }, 10);
  
    return new Promise((resolve) => {
      setTimeout(() => resolve(), time * 1000);
    });
  }
  
  // Функция для отображения изображений
  function renderImages(container, images) {
    const imageRow = document.createElement('div');
    imageRow.classList.add('image-row');
    images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      imageRow.appendChild(img);
    });
    container.appendChild(imageRow);
  }
  
  // Основная функция
  async function loadImagesWithProgress() {
    const app = document.getElementById('app');
  
    // Список мок-функций
    const requests = [
      { delay: Math.random() * (5 - 2) + 2, images: ['https://placekitten.com/100/100', 'https://placekitten.com/101/100'] },
      { delay: Math.random() * (5 - 2) + 2, images: ['https://placedog.net/100/100', 'https://placedog.net/101/100'] },
    ];
  
    for (const request of requests) {
      // Создаём контейнер для текущей загрузки
      const progressContainer = document.createElement('div');
      progressContainer.classList.add('progress-container');
      app.appendChild(progressContainer);
  
      // Отображаем прогресс-бар
      await createProgressBar(progressContainer, request.delay);
  
      // Загружаем изображения
      const images = await mockRequest(request.delay, request.images);
      renderImages(progressContainer, images);
    }
  }
  
  // Запускаем процесс загрузки при загрузке страницы
  document.addEventListener('DOMContentLoaded', loadImagesWithProgress);
