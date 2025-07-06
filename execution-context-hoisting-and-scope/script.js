// Execution Context, Hoisting and Scope

// console.log(user1);
// var user1 = "User1";

// Creation Phase in Global Context
// var name = undefined
// function name = fn()
// window = global object
// this = window
// Hoisting = variable and function declarations are moved to the top
// Execution Phase

// ==========================================================

// console.log(sayHi);
// console.log(sayHi());
// var user2 = "User2";
// var age = 24;

// function sayHi() {
//   return `Hi, I am ${user2}, ${age}`;
// }

// Function create Local Execution Context
// Which contains Creation and Execution Phase
// window
// arguments
// hoisting

// ==========================================================

// var user3 = "User3";
// var username3 = "@user3";

// function printURL(username) {
//   var instagramURL = "https://instagram.com/";
//   return instagramURL + username;
// }

// console.log(printURL(username3));

// ==========================================================

// function a() {
//   console.log(`a`);

//   function b() {
//     console.log(`b`);

//     function c() {
//       console.log(`c`);
//     }

//     c();
//   }

//   b();
// }

// a();

// ==========================================================

// var user3 = "User3";
// var username3 = "globalScopeUser";

// function printURL(/* username3 */) {
//   console.log(arguments);
//   var instagramURL = "https://instagram.com/";
//   return instagramURL + username3;
//   // Function will check: Local variable, then Arguments, then Global variable
// }

// console.log(printURL("argumentsUser", "arguments2User"));

// ==========================================================

// function one() {
//   var user = "user";
//   console.log(user);
// }

// function two() {
//   console.log(user);
// }

// console.log(user);
// var user = "newUser";
// one();
// two("user?");
// console.log(user);

// Output:
// undefined
// one(): user
// two(): newUser
// newUser
