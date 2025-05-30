function greeting() {
    const username = prompt("Введите имя пользователя");
    if (!username) { // Если имя пользователя не введено
      throw new Error("Имя обязательно для заполнения");
    }
  }
  
  try { 
    greeting();
  } catch (error) { 
    alert(error.message); // Показываем сообщение из выброшенной ошибки
  }
