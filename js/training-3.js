// function multiply(a, b, c) {
//   console.log(a * b * c);
// }

// multiply(1, 2, 3);

// function findNumber(start, end, divisor) {
//   for (let i = start; start <= i <= end; i++) {
//     if (i % divisor === 0) return i;
//   }
// }
// console.log(findNumber(8, 17, 3));

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// // calculateTotalPrice([164, 48, 291]); // повертає 503

// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function getEvenNumbers(start, end) {
//   let array = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]`
// getEvenNumbers(3, 11); // [4, 6, 8, 10]`
// getEvenNumbers(2, 5); // [2, 4]`
// getEvenNumbers(8, 8); // [8]getEvenNumbers` приймає наступні параметри: `start, end`
// getEvenNumbers(7, 7);

// function checkStorage(storage, item) {
//   const newItem = item.toLowerCase();
//   for (let i = 0; i < storage.length; i++) {
//     if (storage.includes(newItem)) {
//       return `"${newItem} is available to order!"`;
//     } else {
//       return `"Sorry! We are out of stock!"`;
//     }
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum")); // plum is available to order!
// console.log(checkStorage(["apple", "plum", "pear"], "orange")); // Sorry! We are out of stock!

// function getCommonElements(array1, array2) {
//   let commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(i)) {
//       commonElements.push(i);
//     }
//   }
//   return commonElements;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]); // []
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]

// function changeEven(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); //    [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //  [144, 13, 81, 192, 136, 154]
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const calculateTotalBalance = (users) => {
//   const totalBalannce = users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
//   return totalBalannce;
// };

// console.log(calculateTotalBalance(users));

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .toSorted((a, b) => a.localeCompare(b));

console.log(names);
