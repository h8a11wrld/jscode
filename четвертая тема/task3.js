// Стрелочная функция для перевода Цельсия в Фаренгейт
const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;

// Стрелочная функция для перевода Фаренгейта в Цельсий
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

// Пример вызова:
console.log(celsiusToFahrenheit(25));  // Вывод: 77
console.log(fahrenheitToCelsius(77));  // Вывод: 25
