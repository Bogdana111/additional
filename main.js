// const fruits = ["Яблуко", "Груша", "Апельсин"];
// const shoppingCart = fruits;
// shoppingCart.push("Банан");
// console.log(fruits.length);

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// // 2. Передача аргументів
// multiply(2, 10, 5);

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");
//   // Повертаємо результат виразу множення
//   return x * y * z;
//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }
// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result);

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const words = message.split(" ");
//   const messageLength = words.length;
//   return messageLength * pricePerWord;

//   // Change code above this line
// }

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let evenNumbers = [];
//   for (i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
// }
// console.log(getEvenNumbers(2, 5));

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log(
//         "Знайшли число 3, робимо повернення, перериваючи цикл і функцію"
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконається
//   console.log("Лог після циклу в тілі функції");
// }

// const result = fn();
// console.log("Лог після виходу з функції");
// console.log(`Результат виконання функції ${result}`);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]
// console.log(book);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products)
//     if (product.name === productName) {
//       return product.price;
//     }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;

//   for (const product of products) {
//     if (productName === product.name) {
//       total = product.price * product.quantity;
//     }
//   }

//   return total;
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Blaster"));

// function getRoots(a, b, c) {
//   const D = b * b - 4 * a * c;

//   if (D > 0) {
//     const x1 = (-b + Math.sqrt(D)) / (2 * a);
//     const x2 = (-b - Math.sqrt(D)) / (2 * a);

//     return [x1, x2];
//   } else if (D === 0) {
//     const x1 = -b / (2 * a);

//     return [x1];
//   } else {
//     return "No roots";
//   }
// }

// console.log(getRoots(5, 6, 1));

// ВВОД ЧИСЛА, ВЫВОД СТРОКИ

// function numToPr(number) {
//   const h = [
//       "сто",
//       "двести",
//       "триста",
//       "четыреста",
//       "пятьсот",
//       "шестьсот",
//       "семьсот",
//       "восемьсот",
//       "девятьсот",
//     ],
//     t = [
//       "",
//       "двадцать",
//       "тридцать",
//       "сорок",
//       "пятьдесят",
//       "шестьдесят",
//       "семьдесят",
//       "восемьдесят",
//       "девяносто",
//     ],
//     o = [
//       "один",
//       "два",
//       "три",
//       "четыре",
//       "пять",
//       "шесть",
//       "семь",
//       "восемь",
//       "девять",
//     ],
//     p = [
//       "одиннацать",
//       "двенадцать",
//       "тринадцать",
//       "четырнадцать",
//       "пятнадцать",
//       "шестнадцать",
//       "семнадцать",
//       "восемнадцать",
//       "девятнадцать",
//     ];
//   let str = number.toString(),
//     out = "";

//   if (str.length == 1) return o[number - 1];
//   else if (str.length == 2) {
//     if (str[0] == 1) out = p[parseInt(str[1]) - 1];
//     else
//       out =
//         t[parseInt(str[0]) - 1] +
//         (str[1] != "0" ? " " + o[parseInt(str[1]) - 1] : "");
//   } else if (str.length == 3) {
//     out =
//       h[parseInt(str[0]) - 1] +
//       (str[1] != "0" ? " " + t[parseInt(str[1]) - 1] : "") +
//       (str[2] != "0" ? " " + o[parseInt(str[2]) - 1] : "");
//   }

//   let arr = out.split("");
//   arr[0] = arr[0].toUpperCase();
//   out = arr.join("");
//   return out;
// }

// console.log(numToPr(365));

// function getReps(number) {
//   const numbers = [
//     1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6,
//     6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 10,
//   ];
//   let count = 0;
//   //   let a = number;
//   for (let i = 0; i < numbers.length; i += 0) {
//     if (numbers[i] === number) {
//       count += 1;
//       return count;
//     }
//   }
// }
// getReps(3);

// function getReps(array, number) {
//   //
//   let count = 0;
//   for (let i = 0; i < array.length; ++i) {
//     if (array[i] === number) {
//       count += 1;
//       return count;
//     }
//   }
// }
// const array = [
//   1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
//   6, 7, 7, 7, 7, 8, 9, 9, 9, 10,
// ];
// getReps(3);

// let styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles.splice(1, 1, "Классика");
// console.log(styles);
// console.log(styles.shift());
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// function sumInput() {
//   let arr = [];

//   while (true) {
//     const value = prompt("Please enter something");

//     if (value === "" || value === null || isNaN(value)) {
//       break;
//     }

//     arr.push(Number(value));
//   }

//   return arr.reduce(function (acc, currentValue) {
//     console.log(this);

//     return acc + currentValue;
//   }, 0);
//   //return sum of array
// }

// console.log(sumInput());

// function test() {
//   console.log(this);
// }

// const arr = [
//   test,
//   () => {
//     console.log(this);
//   },
// ];
// arr[0]();

// function sumInput() {
//   let arr = [];

//   while (true) {
//     const value = prompt("Please enter something");

//     if (value === "" || value === null || isNaN(value)) {
//       break;
//     }

//     arr.push(Number(value));
//   }

//   //   return arr.reduce(function (acc, currentValue) {
//   //     console.log(this);

//   //     return acc + currentValue;
//   //   }, 0);
//   //   //return sum of array
// }

// console.log(sumInput());

// **********************************************************

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     sum += order[i];
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// **********************************************************

// function getEvenNumbers(start, end) {
//     let numbers = [];
//     for (let i = start; i <= end; i += 1) {
//       if (i % 2 === 0) {
//         numbers.push(i);
//       }
//     }
//     return numbers;
//   }

// **********************************************************

// function checkStorage(storage, item) {
//   return storage.includes(item.toLowerCase())
//     ? `${item.toLowerCase()} is available to order!`
//     : "Sorry! We are out of stock!";
// }
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));

// **********************************************************

// function getCommonElements(array1, array2) {
//   const elements = [];
//   for (let i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       elements.push(array1[i]);
//     }
//   }
//   return elements;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// **********************************************************

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// **********************************************************

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// **********************************************************

// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// **********************************************************

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
//   return args.join("-");
// }

// console.log(foo(1, 2, 3)); // Поверне "1-2-3"

// **********************************************************

// toReversed()
// function createReversedArray() {
//   const arg = Array.from(arguments);
//   return arg.toReversed();
// }
// console.log(createReversedArray(412, 371, 94, 63, 176));

// **********************************************************

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100));

// **********************************************************

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//     null;
//   }
//   return;
// }
// console.log(getProductPrice("Grip"));

// ****************************************************************************************************
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   let totalPrice = 0;
//   for (const product of products) {
//     if (productName === product.name) {
//       return (totalPrice = product.price * product.quantity);
//     }
//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Grgtrgtip"));
//

// ****************************************************************************************
// const atTheOldToad = {
//   points: [],
//   getPoints() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// **************************************************
function getExtremeScores(scores) {
  let obj = {};

  obj.best = Math.max(...scores);
  obj.worst = Math.min(...scores);
  return obj;
}
console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
