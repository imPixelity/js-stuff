// Spread Operator
// Spreading iterables -> single element

// const student = ["student1", "student2", "student3"];
// console.log(...student);
// console.log(...student[0]);

// =============================================================

// Combine 2 array

// const student1 = ["student1-0", "student1-1", "student1-2"];
// const student2 = ["student2-0", "student2-1", "student2-2"];
// const allStudent = [...student1, ...student2];
// console.log(allStudent);

// =============================================================

// Copying array
// const student1 = ["student1-0", "student1-1", "student1-2"];
// const student2 = [...student1];

// =============================================================

// const liStudent = document.querySelectorAll("li");
// const test = [...liStudent];
// const liStudentArr = [...liStudent].map((e) => {
//   return e.textContent;
// });
// console.log(liStudent);
// console.log(test);
// console.log(liStudentArr);

// =============================================================

// const test = document.querySelector(".test");
// const letter = [...test.textContent]
//   .map((e) => {
//     return `<span>${e}</span>`;
//   })
//   .join("");
// test.innerHTML = letter;
