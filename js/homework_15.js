// === Завдання 1 ===
// Отримати загальну суму балансу (поле balance) всіх користувачів.
const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};

console.log("Завдання 1:");
console.log(calculateTotalBalance(users)); 

// === Завдання 2 ===
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log("\nЗавдання 2:");
console.log(getUsersWithFriend(users, 'Briana Decker')); 
console.log(getUsersWithFriend(users, 'Goldie Gentry')); 

// === Завдання 3 ===
// Масив імен людей, відсортованих за кількістю їх друзів.
const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};

console.log("\nЗавдання 3:");
console.log(getNamesSortedByFriendsCount(users));


// === Завдання 4 ===
// Масив усіх унікальних умінь (skills) всіх користувачів, відсортований в алфавітному порядку.
const getSortedUniqueSkills = users => {
  const allSkills = users.flatMap(user => user.skills);
  const uniqueSkills = [...new Set(allSkills)];
  return uniqueSkills.sort();
};

console.log("\nЗавдання 4:");

