let cardInserted = true; 
let availableBalance = 500; 

const operationAmount = parseFloat(prompt("Введите сумму операции:"));

if (cardInserted && operationAmount <= availableBalance) {
  console.log("Операция выполняется");
  availableBalance -= operationAmount; 
} else {
  console.log("Операция отклонена");
}
