function globalError() {
    const error = Error('Глобальная ошибка');
    error.name = 'GlobalError';
    throw error;
  }
  
  function localError() {
    const error = Error('Локальная ошибка');
    error.name = 'LocalError';
    throw error;
  }
  
  function testErrorScope(fn) {
    try {
      try {
        fn(); // Выполняем функцию
      } catch (error) {
        if (error.name === 'GlobalError') { 
          // Если ошибка глобальная, пробрасываем её дальше
          throw error;
        }
        console.log('Обнаружена локальная ошибка'); // Обрабатываем локальную ошибку
        console.error(error);
      }
    } catch (error) {
      console.log('Обнаружена глобальная ошибка'); // Обрабатываем глобальную ошибку
      console.error(error);
    }
  }
  
  // Тестируем
  testErrorScope(localError); // Локальная ошибка
  testErrorScope(globalError); // Глобальная ошибка
