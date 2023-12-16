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
const max = 50;
const min = 23;

for (let i = max; i < min; i -= 2) {
    if (i % 2 !== 0){
        continue
    } else {
        console.log(i)
    }
}
