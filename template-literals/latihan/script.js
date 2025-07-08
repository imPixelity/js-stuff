// HTML Fragments
// const student = {
//   name: "Student",
//   age: 123,
//   email: "student@gmail.com",
// };

// const el = `<div class="student">
//     <h2>${student.name}</h2>
//     <span class:"email">${student.email}</span>
// </div>`;

// document.body.innerHTML = el;

// 2. Looping
// const student = [
//   {
//     name: "Student1",
//     email: "student1@gmail.com",
//   },
//   {
//     name: "Student2",
//     email: "student2@gmail.com",
//   },
//   {
//     name: "Student3",
//     email: "student3@gmail.com",
//   },
// ];

// const el = `<div class="student">
//     ${student
//       .map((n) => {
//         return `<ul>
//         <li>${n.name}</li>
//         <li>${n.email}</li>
//      </ul>`;
//       })
//       .join("")}
// </div>`;

// document.body.innerHTML = el;

// 3. Conditionals
// Ternary
// const song = {
//   title: "Sigma",
//   singer: "Sigmus",
//   feat: "Sigmaxxing",
// };

// const el = `<div class="song">
//     <ul>
//         <li>${song.title}</li>
//         <li>${song.singer} ${song.feat ? `feat. ${song.feat}` : ""}</li>
//     </ul>
// </div>`;

// document.body.innerHTML = el;

// 4. Nested
// Nested HTML Fragments

// const student = {
//   name: "Student1",
//   sem: 3,
//   subject: ["Mewing", "Rizz", "Sigma"],
// };

// function printSubject(subject) {
//   return `<ol>
//     ${subject
//       .map((s) => {
//         return `<li>${s}</li>`;
//       })
//       .join("")}
//   </ol>`;
// }

// const el = `<div class="student">
//     <h2>${student.name}</h2>
//         <span class="sem">Sem: ${student.sem}</span>
//         <h4>Subject :</h4>
//         ${printSubject(student.subject)}
//     </div>`;

// document.body.innerHTML = el;
