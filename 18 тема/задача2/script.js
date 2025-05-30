// Функция для анимации прогресс-бара
function progress(time) {
    // Получаем элементы
    const progressBar = document.getElementById('progress-bar');
    const timerDisplay = document.getElementById('timer');
  
    // Минимальное время - 2 секунды
    const duration = Math.max(time, 2);
  
    // Устанавливаем начальные значения
    progressBar.style.transition = `transform ${duration}s linear`;
    progressBar.style.transform = 'scaleX(0)';
  
    // Обновляем таймер каждую секунду
    let elapsedSeconds = 0;
    const timerInterval = setInterval(() => {
      elapsedSeconds++;
      timerDisplay.textContent = `Прошло секунд: ${elapsedSeconds}`;
  
      // Останавливаем таймер после завершения
      if (elapsedSeconds >= duration) {
        clearInterval(timerInterval);
      }
    }, 1000);
  
    // Запускаем анимацию
    setTimeout(() => {
      progressBar.style.transform = 'scaleX(1)';
    }, 10); // Небольшая задержка для активации transition
  }
  
  // Запускаем progress bar на 5 секунд
  document.addEventListener('DOMContentLoaded', () => {
    progress(5); // Укажите нужное время в секундах
  });
