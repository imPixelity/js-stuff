// Destructuring

// function addMult(a, b) {
//   return [a + b, a * b];
// }

// const add = addMult(1, 2)[0];
// const mult = addMult(1, 2)[1];
// console.log(add, mult);

// =================================================

// const [add, mult] = addMult(1, 2);
// console.log(add, mult);

// =================================================

// function calculate(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [add, subtract, mult, div] = calculate(1, 2);
// console.log(add);

// =================================================

// function calculate(a, b) {
//   return {
//     add: a + b,
//     subtract: a - b,
//     mult: a * b,
//     div: a / b,
//   };
// }

// const { div, add, subtract, mult } = calculate(1, 2);
// console.log(div);

// =================================================
// Destructuring function arguments
// const student1 = {
//   name: "student1",
//   age: 122,
//   grade: {
//     task1: 100,
//     task2: 122,
//     task3: 123,
//   },
// };

// function printStudent(student) {
//   return `Hi, I'm ${student.name}, ${student.age}`;
// }

// console.log(printStudent(student1));

// =================================================

// function printStudent({ name, age }) {
//   return `Hi, I'm ${name}, ${age}`;
// }

// console.log(printStudent(student1));

// =================================================

// function printStudent({ name, age, grade: { task1, task2, task3 } }) {
//   return `Hi, I'm ${name}, ${age}, ${task1}`;
// }

// console.log(printStudent(student1));
