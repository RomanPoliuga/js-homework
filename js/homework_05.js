// 1. Створіть змінну, що симулює вибір варіанта зі списку.
//  Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік".
//  Використайте switch

let choice = "Чай";
switch (choice) {
  case "Кава":
    console.log("Кава");
    break;
  case "Чай":
    console.log("Чай");
    break;
  case "Сік":
    console.log("Сік");
    break;
  default:
    console.log("Невідомий варіант");
}

// 2. Створіть змінну для зберігання введеного рядка, який може бути днем тижня.
//  Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

let day = "Субота";

switch (day) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П'ятниця":
    console.log("Робочий день");
    break;
  case "Субота":
  case "Неділя":
    console.log("Вихідний");
    break;
  default:
    console.log("Невідомий день");
}

// 3. Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

let month = 3;  
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Невідомий місяць");
}

// 4. Створіть змінну для зберігання назви кольору.
//  Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

let color = "зелений";

switch (color) {
  case "червоний":
    console.log("Стоп");
    break;
  case "зелений":
    console.log("Йти");
    break;
  case "жовтий":
    console.log("Чекати");
    break;
  default:
    console.log("Невідомий колір");
}

// 5. Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат.
//  У випадку ділення на нуль — виведіть попередження.

let num1 = 10;
let num2 = 5;
let operator = "+";  
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      console.log("Попередження: ділення на нуль!");
      break;
    }
    result = num1 / num2;
    break;
  default:
    console.log("Невідомий оператор");
    return;  
}


if (result !== undefined) {
  console.log("Результат: " + result);
}