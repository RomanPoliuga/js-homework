// 1. Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

const result = 5+5+'5';
console.log(result)

// 2. Створіть змінну email з вашою електронною адресою.
//  Напишіть скрипт, який перевіряє чи містить змінна email символ @ (за доп метода includes()
//   або indexOf()) та рахує загальну кількість символів.
//  Результат виведіть в консоль.
const email ="romanpoluga2@gmail.com"
const emailLength =email.length;
console.log(email)
console.log(emailLength)
console.log(email.includes('@'))

// 3. Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName.
//  До змінної fullName додати ‘Viktor’. fullName вивести в консоль.(працюємо з конкатенацією)

let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = word1 + " " + word2 + " " + word3;
fullName = fullName + " Viktor";
console.log(fullName);

// 4. Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.
//  За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього
//  «Дякуємо, Олександро! До сплати 300 гривень»


let userName = "Олександро";
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);


// Додаткові для практики:
// // 5. Створити змінну, яка містить рядок з вашим ім'ям та прізвищем.
// //  Використовуючи метод .indexOf(), знайти і вивести в консоль 
// // позицію, на якій знаходиться пробіл між ім'ям та прізвищем.


let full = "Іван Петров";
let spaceIndex = full.indexOf(" ");
console.log(spaceIndex);


// // 6. Написати скрипт пошуку в рядку. Дано:
// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'розпродаж';
// const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
// const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
// const string3 = 'Рекламна кампанія #jsIsAwesome';

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';
const string1 = 'Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';