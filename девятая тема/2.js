const listCarDetails = (carObject) => {
    for (const carName in carObject) {
      const car = carObject[carName];
      console.log(`${car.name}: ${car.hp} л.с.`);
    }
  };
  
  // Пример использования
  listCarDetails(cars);
  
