// Функция для вычисления итоговой стоимости с учетом скидки
function totalSum(price, quantity, discount) {
    let total = price * quantity;
    let discountAmount = total * (discount / 100);
    return total - discountAmount;
}

// Пример вызова:
let priceItem = 25000;
let amountItem = 3;
let discountItem = 20;
console.log(totalSum(priceItem, amountItem, discountItem));  // Вывод: 60000
