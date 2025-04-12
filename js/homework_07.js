// 1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const numbers = [23 , 55, 27]
numbers[1] = 10;

// 2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const arrey = ["apple", "plum", "pear"]
arrey.push("melon")

// 3. Створити скрипт який поверне суму всіх чисел в масиві.
let total = 0;
const nums = [290, 45, 13]
for(let i = 0; i < nums.length ; i += 1){
    total = total + nums[i]
}
// console.log(total)

// 4.Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const nums01 = [13, 43, 96, 85, 26]
for(let i = 0; i < nums01.length ; i += 1){
    nums01[i]
    // console.log(nums01[i])
}


// 5.Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const fruits = ["apple", "plum", "pear","watermelon","banana"]
for(const fruit of fruits){
    // console.log(fruit.length)
    if(fruit.length > 5){
        // console.log(fruit)
    }
}

// 6.Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const nums02 = [13, 43, 96, 85, 26, 67, 123, 868, 98, 8]
let theBigerNum=nums02[0];
for (const num of nums02){
    if(num > theBigerNum){
        theBigerNum = num  
    }   
}
    // console.log(theBigerNum)


// 7.Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const nums03 = [13, 43, 96, 85, 26, 67, 123, 868, 98, 8]
for(const num of nums03){
    if(num %2 === 0){
        console.log(num)
    }
}
