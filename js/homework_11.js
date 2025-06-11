// 1.Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber",
//  "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw",
//  який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму.
//  Після проведення операції виводити повідомлення про залишок на рахунку. 
const bankAccount ={
  ownerName:"Harmony",
  accountNumber:10,
  balance: 1000,
deposit() {
    if (confirm("Бажаєте поповнити рахунок?")) {
      let amount = parseFloat(prompt("Введіть суму для поповнення:"));
      if (!isNaN(amount) && amount > 0) {
        this.balance += amount;
        alert(`Рахунок поповнено. Новий баланс: ${this.balance} грн.`);
      } else {
        alert("Невірна сума.");
      }
    }
  },

  withdraw() {
    if (confirm("Бажаєте зняти гроші з рахунку?")) {
      let amount = parseFloat(prompt("Введіть суму для зняття:"));
      if (!isNaN(amount) && amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          alert(`Гроші знято. Новий баланс: ${this.balance} грн.`);
        } else {
          alert("Недостатньо коштів на рахунку.");
        }
      } else {
        alert("Невірна сума.");
      }
    }
  }
};


// 2.Створіть об'єкт "weather" з властивостями "temperature", "humidity",
//  "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false",
//  якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt().
// Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
    temp : prompt("Введіть температуру"),
    humidity: 0,
    windSpeed: 0,
    belowZero () {
       if(Number(this.temp) < 0){
        return true;
       } else {
        return false;
       }
    }  
}
const answer= weather.belowZero()
if(answer){
  alert("Температура нище 0")
}else{
alert('Температура вище 0')
}
console.log(answer)
// 3.Створіть об’єкт "user", який буде мати властивості "name", "email",
//  "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 

const user ={
  nam:"Roman",
  email:"roman@gmail.com",
  password:"1234bem",
  login(email,password){
    if(this.email===this.email && this.password===password){
      return true;
    }else{
      console.log("Введіть правельний пароль")
    }
  }
}
const result = user.login("roman@gmail.com", "1234bem")
console.log(result)

// 4.Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating".
//  Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче.
//  Вивести значення властивостей в консоль. 
const movie = {
    title: "The Movie",
    director: "Hlib",
    year: "1988",
    rating: 7,
    checkRating(){
        if(this.rating > 8){
            return "Good movie"
        } else{
            return "Bad movie"
        }
    }
}
console.log(movie.checkRating());