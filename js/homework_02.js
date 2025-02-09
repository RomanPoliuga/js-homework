// 1. Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм та Фаренгейтом.
//  Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

let celsius = 35;
let fahrenheit = (celsius * 9/5) + 32
console.log(celsius + " C = " + fahrenheit + " F");

// 2. Створити змінну daysInMonth для зберігання кількості днів у місяці.
//  Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.

let daysInMonth = 31;
let hours = 24;
let hoursInMonth = (daysInMonth * hours)
let minutes = 60;
let minutesInMonth = (hoursInMonth * minutes)
console.log(minutesInMonth)
console.log(hoursInMonth)

// 3. Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі.
//  Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.

let health = 100;
let energy = 100;
console.log(energy - 57)
console.log(health - 25)

// 4. Створити змінну totalPrice для зберігання суми покупки в магазині.
//  Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення.
//  Результат зберегти в змінній discountedPrice та вивести результат в консоль.

let totalPrice = 3000;
let discount = 10;
let discountedPrice = (totalPrice % discount)
console.log(discountedPrice)

// 5. Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою.
//  Використати метод Math.floor() для округлення числа до меншого.
//  Результат зберегти в змінній roundedDown та вивести результат в консоль.

const floatNumber = 12.78;
const roundedDown = (Math.floor(floatNumber))
console.log(roundedDown)

// 6. Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою.
//  Використати метод parseFloat() для перетворення рядка у десяткове число.
//  Результат зберегти в змінній parsedFloat та вивести результат в консоль.

const floatString = "45.67";
const parsedFloat = (parseFloat(floatString))
console.log(parsedFloat)

// 7. Створити змінну const intString = "123" для зберігання рядка, який містить ціле число.
//  Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній parsedIntта вивести результат в консоль.
const intString = "123";
const parsedInt = (parseInt(intString))


// 8. Створити змінну number для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа.
//  Результат зберегти в змінній sqrtNumber та вивести результат в консоль.
const number = 1000;
const sqrtNumber = (Math.sqrt(number))
console.log(sqrtNumber)

// 9. Створити змінну const stringNumber = "256" для зберігання  рядка з числом у вигляді рядка.
//  Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній convertedstring та вивести результат в консоль.
const stringNumber = "256";
const convertedstring = (parseInt(stringNumber))
console.log(convertedstring)