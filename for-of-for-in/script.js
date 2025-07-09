// For ... of
// const student = ["student1", "student2", "student3"];

// Array

// for (let i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }

// ==============================================

// student.forEach((std) => {
//   console.log(std);
// });

// ==============================================

// for (const s of student) {
//   console.log(s);
// }

// ==============================================

// String

// const name = "student5";

// for (const n of name) {
//   console.log(n);
// }

// ==============================================

// const student = ["student1", "student2", "student3"];
// Unlike forEach, for ... of doesnt have index
// for (const [i, s] of student.entries()) {
//   console.log(`${s} is student number: ${i + 1}`);
// }

// ==============================================

// NodeList

// const liName = document.querySelectorAll(".name");

// liName.forEach((e) => {
//   console.log(e.textContent);
// });

// for (n of liName) {
//   console.log(n.textContent);
// }

// ==============================================

// Arguments

// function calcNum() {
//   let total = 0;
//   for (a of arguments) {
//     total += a;
//   }
//   return total;
// }

// console.log(calcNum(1, 2, 3, 4, 5));

// ==============================================

// For ... in
// const student = {
//   name: "student",
//   age: 123,
//   email: "student@gmail.com",
// };

// for (s in student) {
//   console.log(s);
//   console.log(student[s]);
// }
