// Функция для создания автомобиля
const createCar = (additionalProperties) => {
    // Базовый объект автомобиля
    const baseCar = {
      wheels: 4,
      doors: 4,
      isStarted: false
    };
  
    // Объединяем baseCar с additionalProperties
    const combinedCar = { ...baseCar, ...additionalProperties };
  
    // Возвращаем объединённый объект
    return combinedCar;
  };
  
  // Пример использования
  console.log(createCar({ name: 'Haval', hp: 198 }));
  
