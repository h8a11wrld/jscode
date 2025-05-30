const apiKey = 'YOUR_API_KEY'; // Вставьте ваш ключ OpenWeatherMap
const city = 'London'; // Задайте город по умолчанию
const forecastDays = 3;

async function fetchWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  const data = await response.json();
  return data;
}

async function fetchForecast() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=${forecastDays}&appid=${apiKey}`
  );
  const data = await response.json();
  return data.list;
}

function updateCurrentWeather(data) {
  document.querySelector('.city').textContent = data.name;
  document.querySelector('.date').textContent = new Date().toLocaleDateString();
  document.querySelector('.weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  document.querySelector('.temperature').textContent = `${Math.round(
    data.main.temp
  )}°C`;
  document.querySelector('.description').textContent = data.weather[0].description;
}

function updateForecast(forecast) {
  const forecastContainer = document.querySelector('.forecast-list');
  forecastContainer.innerHTML = ''; // Очистка перед обновлением

  forecast.forEach((day) => {
    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-item');
    forecastItem.innerHTML = `
      <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
      <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="Weather Icon">
      <p>${Math.round(day.main.temp)}°C</p>
    `;
    forecastContainer.appendChild(forecastItem);
  });
}

async function init() {
  try {
    const weatherData = await fetchWeather();
    updateCurrentWeather(weatherData);

    const forecastData = await fetchForecast();
    updateForecast(forecastData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

init();
