const countVowels = (word) => {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    const characters = word.toLowerCase().split('');

    const vowelCount = characters.filter(char => vowels.includes(char)).length;

    return vowelCount;
  };
  
  const word = 'JavaScript';
  const vowelCount = countVowels(word);
  console.log(vowelCount);
