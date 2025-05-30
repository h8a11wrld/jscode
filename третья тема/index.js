// Программа для работы банкомата

let cardInserted = true; // Состояние карты: true — карта вставлена, false — карта отсутствует
let availableBalance = 500; // Баланс на карте

const operationAmount = parseFloat(prompt("Введите сумму операции:"));

if (cardInserted && operationAmount <= availableBalance) {
  console.log("Операция выполняется");
  availableBalance -= operationAmount; // Обновление баланса после успешной операции
} else {
  console.log("Операция отклонена");
}
