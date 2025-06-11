// === Завдання 1 ===
// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email.
// У prototype додай метод getInfo(), який виводить значення login і email.
class Account {
  constructor({ login, email }) {
    this.login = login;
    this.email = email;
  }

  getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
}

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
poly.getInfo(); // Login: Poly, Email: poly@mail.com

// === Завдання 2 ===
// Напиши клас User для створення користувача з полями name, age, followers.
// Додай метод getInfo() з форматом: User ${name} is ${age} years old and has ${followers} followers
class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const user1 = new User({ name: 'Mango', age: 2, followers: 20 });
user1.getInfo(); // User Mango is 2 years old and has 20 followers

const user2 = new User({ name: 'Poly', age: 3, followers: 17 });
user2.getInfo(); // User Poly is 3 years old and has 17 followers

// === Завдання 3 ===
// Напиши клас Storage для управління складом товарів (масив).
// Методи: getItems(), addItem(item), removeItem(item)
class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter(i => i !== item);
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

console.table(storage.getItems()); // початковий склад
storage.addItem('Дроїд');
console.table(storage.items); // з доданим "Дроїдом"
storage.removeItem('Пролонгер');
console.table(storage.items); // без "Пролонгера"

// === Завдання 4 ===
// Напиши клас StringBuilder з методами append, prepend, pad та геттером value.
// _value — внутрішній рядок, який змінюється.
class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    this._value = str + this._value;
  }

  pad(str) {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

// === Завдання 5 ===
// Напиши клас Car з властивостями: speed, maxSpeed, isOn, distance, price
// Статичний метод getSpecs(car) виводить характеристики
// Методи: turnOn, turnOff, accelerate, decelerate, drive
class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    this.speed = Math.max(this.speed - value, 0);
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
