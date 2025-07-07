// Function Expression
// const showUser = function (user) {
//   return `Hi ${user}`;
// };
// console.log(showUser("User1"));

// ================================================

// Arrow Function
// const showUser = (user) => {
//   return `Hi ${user}`;
// };
// console.log(showUser("User2"));

// ================================================

// let students = ["Student1", `Student2`, `Student3`];
// let total = students.map(function (student) {
//   return student.length;
// });

// console.log(total);

// ================================================

// let students = ["Student1", `Student2`, `Student3`];
// let total = students.map((student) => {
//   return student.length;
// });

// console.log(total);

// ================================================

// let students = ["Student1", `Student2`, `Student3`];
// let total = students.map((student) => {
//   return { studentName: student, nameLength: student.length };
// });

// console.log(total);

// ================================================

// `this` in Arrow Function

// Constructor Function
// const User = function () {
//   this.username = "User1";
//   this.email = "User1@gmail.com";
//   this.sayHello = function () {
//     console.log(`Hi, my name is ${this.username}`);
//   };
// };

// const user1 = new User();

// ================================================

// Arrow Function in Method
// const User = function () {
//   this.username = "User1";
//   this.email = "User1@gmail.com";
//   this.sayHello = () => {
//     console.log(`Hi, my name is ${this.username}`);
//   };
// };

// const user1 = new User();

// ================================================

// Object Literal

// `this` is targetting window
// const user = {
//   username: "User1",
//   email: "user1@gmail.com",
//   sayHello: () => {
//     console.log(`Hi, my name is ${this.username}`);
//   },
// };

// ================================================

// const User = function () {
//   this.username = "User1";
//   this.age = 25;
//   this.sayHello = function () {
//     console.log(`Hi, my name is ${this.username}`);
//   };

//   console.log(this);

//   // setInterval(function () {
//   //   console.log(this.age);
//   //   console.log(this);
//   // }, 500);

//   setInterval(() => {
//     console.log(this.age);
//     console.log(this);
//   }, 500);
// };

// const user1 = new User();

// ================================================

// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//   let condition1 = "size";
//   let condition2 = "caption";

//   if (this.classList.contains(condition1)) {
//     [condition1, condition2] = [condition2, condition1];
//   }

//   this.classList.toggle(condition1);
//   setTimeout(() => {
//     this.classList.toggle(condition2);
//   }, 600);
// });
