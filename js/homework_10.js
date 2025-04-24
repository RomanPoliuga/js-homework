function processArray(array, callback) {
    return callback(array);
  }
  function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
      sum += num;
    }
    return sum;
  }
  
  function minArray(arr) {
    return Math.min(...arr);
  }
  
  function maxArray(arr) {
    return Math.max(...arr);
  }
  
  const numbers = [5, 10, 2, 44, 7];
  
  console.log("Сума:", processArray(numbers, sumArray)); 
  console.log("Мінімум:", processArray(numbers, minArray));
  console.log("Максимум:", processArray(numbers, maxArray)); 
  const sumArrayArrow = arr => arr.reduce((acc, num) => acc + num, 0);

  const minArrayArrow = arr => Math.min(...arr);
  
  const maxArrayArrow = arr => Math.max(...arr);
  
  console.log("Сума (стрілка):", processArray(numbers, sumArrayArrow)); 
  console.log("Мінімум (стрілка):", processArray(numbers, minArrayArrow));
  console.log("Максимум (стрілка):", processArray(numbers, maxArrayArrow)); 
      