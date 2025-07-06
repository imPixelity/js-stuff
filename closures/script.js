// Lexical Scope

// function init() {
//   let username = "user1";
//   // Inner function (closure)
//   function printName() {
//     console.log(username); // Accessing parent variable
//   }
//   printName();
// }
// init();

// =========================================================

// function init() {
//   let username = "user1";
//   function printName() {
//     console.log(username);
//   }
//   return printName;
// }
// const printResult = init();
// printResult();

// =========================================================

// function init() {
//   function printName(username) {
//     console.log(username);
//   }
//   return printName;
// }
// const printResult = init();
// printResult("User");

// =========================================================

// function init() {
//   return function (username) {
//     console.log(username);
//   };
// }
// const printResult = init();
// printResult("User");

// =========================================================

// function sayHello(weather) {
//   return function (username) {
//     console.log(`Hello ${username}, currently its ${weather}`);
//   };
// }

// let sunny = sayHello("sunny");
// let raining = sayHello("raining");
// let cloudy = sayHello("cloudy");

// sunny("User-01");
// raining("User-02");
// cloudy("User-03");

// =========================================================

// let add = () => {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let num = add();
// for (let i = 0; i < 3; i++) {
//   console.log(num());
// }

// =========================================================

// let add = (() => {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// })();

// for (let i = 0; i < 3; i++) {
//   console.log(add());
// }
