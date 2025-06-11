// === Завдання 1 ===
// Напиши скрипт, який:
// - додає поле mood зі значенням 'happy'
// - замінює значення hobby на 'skydiving'
// - замінює значення premium на false
// - виводить об'єкт у форматі ключ:значення

const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log("=== Завдання 1 ===");
for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// === Завдання 2 ===
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log("\n=== Завдання 2 ===");
console.log("Кількість властивостей:", countProps({ name: "Alice", age: 25, role: "admin" }));

// === Завдання 3 ===
// Напиши функцію findBestEmployee(employees), яка повертає ім'я найпродуктивнішого співробітника.

function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = "";

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }
  return bestEmployee;
}

console.log("\n=== Завдання 3 ===");
console.log("Найпродуктивніший працівник:", findBestEmployee({
  Ann: 29,
  David: 35,
  Helen: 1,
  Lorence: 99,
}));

// === Завдання 4 ===
// Напиши функцію countTotalSalary(employees), яка повертає загальну суму зарплат.

function countTotalSalary(employees) {
  let total = 0;
  for (const salary of Object.values(employees)) {
    total += salary;
  }
  return total;
}

console.log("\n=== Завдання 4 ===");
console.log("Загальна зарплата:", countTotalSalary({
  Mango: 100,
  Poly: 150,
  Alfred: 80,
}));

// === Завдання 5 ===
// Напиши функцію getAllPropValues(arr, prop), яка повертає масив значень певної властивості з кожного об'єкта масиву.

function getAllPropValues(arr, prop) {
  const result = [];
  for (const obj of arr) {
    if (prop in obj) {
      result.push(obj[prop]);
    }
  }
  return result;
}

const products = [
  { name: "apple", price: 30 },
  { name: "banana", price: 20 },
  { name: "cherry", price: 40 },
];

console.log("\n=== Завдання 5 ===");
console.log("Значення властивості 'name':", getAllPropValues(products, "name"));

// === Завдання 6 ===
// Напиши функцію calculateTotalPrice(allProducts, productName), яка повертає загальну вартість конкретного продукту.

function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}

const items = [
  { name: "apple", price: 10, quantity: 3 },
  { name: "banana", price: 5, quantity: 6 },
];

console.log("\n=== Завдання 6 ===");
console.log("Загальна вартість 'banana':", calculateTotalPrice(items, "banana"));
