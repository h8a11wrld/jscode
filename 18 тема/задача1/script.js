// Функция для имитации запроса, возвращающего массив URL-ов
const fetchImages1 = () => {
    return new Promise((resolve) => {
      const urls = [
        'https://placekitten.com/200/300',
        'https://placekitten.com/250/350',
        'https://placekitten.com/300/400',
      ];
  
      // Случайная задержка от 2 до 5 секунд
      const delay = Math.random() * (5000 - 2000) + 2000;
  
      setTimeout(() => {
        resolve(urls);
      }, delay);
    });
  };
  
  // Ещё одна функция для имитации запроса
  const fetchImages2 = () => {
    return new Promise((resolve) => {
      const urls = [
        'https://placedog.net/400/300',
        'https://placedog.net/350/250',
        'https://placedog.net/300/200',
      ];
  
      // Случайная задержка от 2 до 5 секунд
      const delay = Math.random() * (5000 - 2000) + 2000;
  
      setTimeout(() => {
        resolve(urls);
      }, delay);
    });
  };
  
  // Обработка промисов и добавление изображений на страницу
  const loadImages = async () => {
    const container = document.getElementById('imageContainer');
  
    // Вызов двух функций
    const promise1 = fetchImages1();
    const promise2 = fetchImages2();
  
    // Ждём завершения обоих промисов
    Promise.all([promise1, promise2])
      .then(([images1, images2]) => {
        // Перемешиваем порядок массива изображений
        const allImages = [...images1, ...images2];
        allImages.sort(() => Math.random() - 0.5);
  
        // Добавляем изображения на страницу
        allImages.forEach((url) => {
          const img = document.createElement('img');
          img.src = url;
          container.appendChild(img);
        });
      })
      .catch((error) => {
        console.error('Ошибка загрузки изображений:', error);
      });
  };
  
  // Загружаем изображения при загрузке страницы
  document.addEventListener('DOMContentLoaded', loadImages);
