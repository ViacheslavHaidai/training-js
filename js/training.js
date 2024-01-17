// const i = 12
// console.log(i)

// Оголоси функцію isEvenNumber(number), яка перевіряє
// (за допомогою тернарного оператору) чи отримане значення
// є парним числом і виводить відповідне повідомлення
// "Число парне" або "Число непарне"
// Якщо функція отримує не число вивести повідомлення 
// "Невалідне значення"

// function isEvenNumber(number){
//     if (typeof number === 'number') {
//         return number % 2 === 0 ? 'Число парне' : 'Число непарне'
//     } else {
//         return 'Невалідне значення'
//     }
    
// }
// console.log(isEvenNumber(6))
// console.log(isEvenNumber(7))
// console.log(isEvenNumber('якийсь текст'))




// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

// function checkString(value) {
//     if (typeof value === 'string' && (!includes.value('$'))) {
//         return `довжина рядка: ${value.length}`
//     } else {
//         return `не коректний ввід`
//     }
// }

// console.log(checkString('грошіі$'))
// console.log(checkString('грошіі'))
// console.log(checkString(7))

//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//     if (i % 2 !== 0){
//         continue
//     } else {
//         console.log(i)
//     }
// }



// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let total = 0;
// for (let i = min; i <= max; i++) {
//     if (i % 2 !== 0){
//         continue
//     } else {
//         total += i 
        
//     }

// }

// console.log(total)




// Напишіть програму, яка обчислить суму всіх чисел (за допомогою циклу for)
// від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
// `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`
// let total = 0
// for (let i = 1; i <= 100; i++){
//     if (i % 3 === 0 || i % 5 === 0) {
//         total += i
//     }
// }
// console.log(`Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${total}`)




// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

// function formatMinutesToTime(minutes){
//     const hours = Math.floor(minutes / 60 )
//     const modHours = String(hours).padStart(2, '0')
//     const modMinutes = String(minutes % 60).padStart(2, '0')

    
//     return `${modHours} : ${modMinutes}`
// }

// console.log(formatMinutesToTime(200))

// function getSlice(array, value) {
//     const index = array.indexOf(value) + 1
//     if(array.indexOf(value)) {
//       return array.slice(0, index)
//     } else {
//       return [" "]
//     }
    
//   }
  
//   console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"))
//   console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"))
//   console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"))




// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// let array = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

// console.log(sum); // Виведе 15

// function calculate(number){
//     let sum = 0;
//     for (let i = 0; i <= number.length; i++) {
//       sum += number[i];
//     }
//     return sum
// }



// console.log(calculate([1, 2, 3, 4, 5])); // Виведе 15

// function getEvenNumbers(start, end) {

//     for (let i = start; i <= end; i++){
//       if (i % 2 === 0){
//         return start[i]
//       } else {
//         return []
//       }
//     } 
//   }

//   console.log(getEvenNumbers(3, 15))

//   for(let)

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products ) {
//     if (product.name === productName) {
//       return product.price
//     }
    
//   }
  
// }

// console.log(getProductPrice("Radar"))  // 1300.
// console.log(getProductPrice("Grip")) // 1200.
// console.log(getProductPrice("Scanner")) // 2700.
// console.log(getProductPrice("Droid")) // 400.
// console.log(getProductPrice("Engine")) // null.


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//     let valuesArray = []
  
//   for ( const product of products) {
//     if (propName === products.keys) {
//       valuesArray.push(product.keys.values)
//     }
//     return valuesArray
//   }
// }

// console.log(getAllPropValues("name")) // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")) // [4, 3, 7, 9]
// console.log(getAllPropValues("price")) // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")) // []



// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Mango")); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}



function filterArray(numbers, value) {
  let newArray = []
    numbers.forEach(function (i) {
      if (value < i) {
         newArray.push(i)
      }
    })
    return newArray
  }
  

console.log(filterArray([12, 24, 8, 41, 76], 20)) // [24, 41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 38)) // [41, 76]
console.log(filterArray([1, 2, 3, 4, 5], 4)) // [5]
console.log(filterArray([1, 2, 3, 4, 5], 3)) // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 5)) // []
