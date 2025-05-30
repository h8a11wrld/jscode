const cars = {
    Tesla: {
      name: "Tesla",
      wheels: 4,
      doors: 4,
      isStarted: false,
      hp: 670
    },
    Ford: {
      name: "Ford",
      wheels: 4,
      doors: 4,
      isStarted: true,
      hp: 450
    },
    BMW: {
      name: "BMW",
      wheels: 4,
      doors: 2,
      isStarted: false,
      hp: 520
    },
    Honda: {
      name: "Honda",
      wheels: 4,
      doors: 4,
      isStarted: true,
      hp: 280
    }
  };
  
  const getCar = (carName) => {
    if (cars[carName]) {
      return cars[carName]; 
    } else {
      console.log("Автомобиль не найден!");
      return null; 
    }
  };
  
  // Пример использования
  console.log(getCar("Tesla"));
  console.log(getCar("Ferrari")); // Выводит "Автомобиль не найден!"
