const apiUrl = 'https://sb-film.skillbox.cc/ping';
const notificationContainer = document.createElement('div');
notificationContainer.style.position = 'fixed';
notificationContainer.style.bottom = '20px';
notificationContainer.style.left = '50%';
notificationContainer.style.transform = 'translateX(-50%)';
notificationContainer.style.padding = '10px 20px';
notificationContainer.style.borderRadius = '5px';
notificationContainer.style.color = 'white';
notificationContainer.style.fontSize = '16px';
notificationContainer.style.display = 'none';
document.body.appendChild(notificationContainer);

function showNotification(message, color) {
  notificationContainer.textContent = message;
  notificationContainer.style.backgroundColor = color;
  notificationContainer.style.display = 'block';
}

function hideNotification() {
  notificationContainer.style.display = 'none';
}

async function checkConnection() {
  try {
    const start = Date.now();
    const response = await fetch(apiUrl, { method: 'POST' });
    const duration = Date.now() - start;

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    if (duration > 500) {
      showNotification('Медленное соединение', 'orange');
    } else {
      hideNotification();
    }
  } catch (error) {
    showNotification('Неполадки с сетью', 'red');
  }
}

// Проверка соединения каждые 5 секунд
setInterval(checkConnection, 5000);

// Запуск первоначальной проверки
checkConnection();
