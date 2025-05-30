// Функция для перевода Цельсия в Фаренгейт
function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

// Функция для перевода Фаренгейта в Цельсий
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

// Пример вызова функций:
console.log(celsiusToFahrenheit(25));  // Вывод: 77
console.log(fahrenheitToCelsius(77));  // Вывод: 25
