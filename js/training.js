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

