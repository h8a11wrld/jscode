const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
  ];

  const filterAndSortUsers = (userArray) => {
    return userArray
      .filter(([name, age, sports]) => age > 25 && sports) 
      .sort(([, ageA], [, ageB]) => ageA - ageB)           
      .map(([name]) => name);                              
  };
  
  // Пример использования
  const sportUsersOver25 = filterAndSortUsers(users);
  console.log(sportUsersOver25); 
