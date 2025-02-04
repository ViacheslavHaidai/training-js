// Створіть змінну str і дайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка,
//виведіть на екран символ 'a', символ 'b', символ 'e'.

// const str = 'abcde'

// alert(str[str.length - 1])

/*
 * Шаблонные строки
 * Написать фразу с помощью конкатенации и шаблонных строк
 * "Hello, my name is [name], I'm [age] years old and I like [hobby]", где в квадратных скобках - переменные вставленные в строку
 */

// const name = 'Dan';
// const age = 35;
// const hobby = 'swimming';

// const message = "Hello, my name is " + name +", I'm " + age + " years old and I like " + hobby

// console.log(message)

// const message2 = `Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}`
// console.log(message2)

// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// for, while та do...while.
// Підказка: у результаті має вийти 55.

// let total = 0

// for (let i = 0; i <= 10; i++) {
//     total += i
// }

// console.log(total)

// let total = 0
// let i = 0
// while(i <= 10) {
//     total += i
//     i++
// }

// console.log(total)

// let total = 0
// let i = 0
// do {
//     total += i
//     i++
// } while(i <= 10)

// console.log(total)

/*
 * Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль. 
Якщо було введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".
 */

// const userInput = Number(prompt("Введіть число", 0));
// if (userInput > 0) {
//   console.log(`Це позитивне число`);
// } else if (userInput === 0) {
//   console.log(`Це нуль`);
// } else {
//   console.log(`Це від'ємне число`);
// }

//Напишіть функцію change_register(str), яка приймає як аргумент рядок і замінює регістр кожного символу на протилежний.

// const str = "КоЖнИй МиСлИвЕцЬ бАжАє ЗнАтИ";

// function change_register(str) {
//   let total = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       total += str[i].toUpperCase();
//     } else {
//       total += str[i].toLowerCase();
//     }
//   }
//   return total;
// }
// change_register(str);

// console.log(change_register(str));

//Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалені повторювані елементи з масиву arr.

// var arr = [
//   "php",
//   "php",
//   "css",
//   "css",
//   "script",
//   "script",
//   "html",
//   "html",
//   "java",
// ];
// // function removeDuplicates(arr) {
// //   const newArray = [];
// //   arr.forEach((el) => {
// //     if (!newArray.includes(el)) {
// //       newArray.push(el);
// //     }
// //   });
// //   return newArray;
// // }

// const result = removeDuplicates(arr);
// console.log(result); // [php,css,script,html,java]
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// todo Базові операції з масивом
/*
 * Створіть масив genres з елементами Jazz і Blues. ✅
 * Додайте "Рок-н-рол" в кінець. ✅
 * Виведіть у консоль перший елемент масиву. ✅
 * Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини. ✅
 * Видаліть перший елемент і виведіть його в консоль.  ✅
 * Вставте «Country» та «Raggy» на початок масиву.  ✅
 */

// const genres = ["Jazz", "Blues"];
// genres.push("Рок-н-рол");
// console.log(genres[0]);
// // console.log(genres[genres.length - 1]);
// console.log(genres.at(-1));
// const firstEl = genres.shift();
// console.log(firstEl);
// genres.unshift("Country", "Raggy");
// console.log(genres);
// genres.pop();
// console.log(genres);

// *
//  * Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведіть у консоль рядок у форматі номер_елемента: значення_елемента.
// Нумерація елементів має починатися з першого.
//  */

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋", "🆘", "Ⓜ️"];
// let i = 1;
// for (const item of fruits) {
//   console.log(`${i}. ${item}`);
//   i++;
// }

/*
 * Напиши скрипт, який, для об'єкта user, послідовно:

* додає поле mood зі значенням 'happy'
* замінює значення hobby на 'skydiving'
* замінює значення premium на false
* виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
 */

// const user = {
//   name: "John",
//   age: 21,
//   hobby: "css",
//   premium: true,
// };

// user.mood = "happy";
// console.log(user);
// user.hobby = "skydiving";
// console.log(user);
// user.premium = false;
// console.log(user);
// const keys = Object.values(user);
// console.log(keys);
// for (const key of keys) {
//   console.log(`${key} ${user[key]}`);
// }
