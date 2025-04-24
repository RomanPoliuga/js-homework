function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }
  logItems(['Mango', 'Poly', 'Ajax']);
  
  function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    return words.length * pricePerWord;
  }
  console.log(calculateEngravingPrice("Hello world from JavaScript", 10));
  
  function findLongestWord(string) {
    const words = string.split(" ");
    let longest = words[0];
    for (const word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); 
  
  function formatString(string) {
    if (string.length <= 40) {
      return string;
    } else {
      return string.slice(0, 40) + "...";
    }
  }
  console.log(formatString("Це дуже довгий рядок, який необхідно скоротити, бо він перевищує 40 символів."));
  
  function checkForSpam(message) {
    const lower = message.toLowerCase();
    return lower.includes("spam") || lower.includes("sale");
  }
  console.log(checkForSpam("Get the best SALE now!")); 
  console.log(checkForSpam("Just a normal message"));  
  
  function collectNumbersAndSum() {
    const numbers = [];
    let input;
  
    while (true) {
      input = prompt("Введіть число (або натисніть Cancel для завершення):");
      if (input === null) break;
  
      const number = Number(input);
      if (!isNaN(number)) {
        numbers.push(number);
      } else {
        alert("Будь ласка, вводьте тільки числа.");
      }
    }
  
    if (numbers.length > 0) {
      let total = 0;
      for (const num of numbers) {
        total += num;
      }
      console.log(`Загальна сума чисел дорівнює ${total}`);
    } else {
      console.log("Ви не ввели жодного числа.");
    }
  }

  