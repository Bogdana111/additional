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
