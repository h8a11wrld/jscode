// Функция для подсчёта гласных букв в слове
const countVowels = (word) => {
    // Определяем массив гласных букв
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Приводим слово к нижнему регистру и разбиваем на массив символов
    const characters = word.toLowerCase().split('');
  
    // Используем filter() для фильтрации только гласных букв
    const vowelCount = characters.filter(char => vowels.includes(char)).length;
  
    // Возвращаем количество гласных букв
    return vowelCount;
  };
  
  // Пример использования
  const word = 'JavaScript';
  const vowelCount = countVowels(word);
  console.log(vowelCount); // Выведет 3
