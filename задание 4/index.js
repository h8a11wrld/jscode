const currentYear = new Date().getFullYear();

const users = [];

for (let i = 1; i <= 3; i++) {
  const name = prompt(`Введите имя пользователя №${i}:`);
  const birthYear = parseInt(prompt(`Введите год рождения пользователя №${i}:`), 10);
  const age = currentYear - birthYear;

  users.push({ name, age });
}

users.forEach((user, index) => {
  console.log(`${index + 1} '${user.name}' ${user.age}`);
});

const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log(`Средний возраст пользователей: ${Math.round(averageAge)}`);
