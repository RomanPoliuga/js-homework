
let trelloCards = ["Карточка 1", "Карточка 2", "Карточка 3", "Карточка 4", "Карточка 5"];

console.log(" Початкові картки:", trelloCards);

let result = "";
for (let i = 0; i < trelloCards.length; i++) {
    result += trelloCards[i];
    if (i < trelloCards.length - 1) {
        result += ",";
    }
}
console.log(" Об'єднано через for:", result);


const joined = trelloCards.join(",");
console.log(" Об'єднано через join():", joined);

trelloCards.splice(2, 1);
console.log(" Після видалення Карточки 3:", trelloCards);


trelloCards.push("Карточка 6");
console.log("Після додавання Карточки 6:", trelloCards);


trelloCards.splice(1, 0, "Нова карточка");
console.log(" Після вставки нової картки перед другою:", trelloCards);

trelloCards[0] = "Оновлена карточка 1";
console.log(" Після оновлення першої картки:", trelloCards);
