function hello() {
    console.log('Skill');
  }
  try { 
    helo(); // Ошибка: здесь опечатка, функция должна быть "hello"
  } catch (error) {
    console.error('Произошла ошибка:', error.message); // Отображение ошибки в консоли
  }
  console.log('complete');
