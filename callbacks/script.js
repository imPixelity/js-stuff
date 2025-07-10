// Callback
// Synchronous Callback

// function message(name) {
//   alert(`Hi, ${name}`);
// }

// function displayMessage(callback) {
//   const name = prompt(`Enter your name: `);
//   callback(name);
// }

// displayMessage(message);

// ======================================================

// function displayMessage(callback) {
//   const name = prompt(`Enter your name: `);
//   callback(name);
// }

// displayMessage((name) => {
//   alert(`Hi, ${name}`);
// });

// ======================================================

// const student = [
//   {
//     name: "student1",
//     id: 1,
//   },
//   {
//     name: "student2",
//     id: 2,
//   },
//   {
//     name: "student3",
//     id: 3,
//   },
// ];

// student.forEach((e) => {
//   console.log(e.name);
// });

// ======================================================

// Asynchronous Callback -> This one saved to web API, allowing the rest of the code to run without waiting.

// function getDummyData(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("Status-1");
// getDummyData(
//   "data/dummy1.json",
//   (result) => {
//     const dummy = JSON.parse(result);
//     dummy.forEach((el) => {
//       console.log(el.name);
//     });
//   },
//   () => {}
// );
// console.log("Status-2"); // This will run, not blocked by getDummyData()

// ======================================================

// JQuery

// console.log("Status-1");
// $.ajax({
//   url: "data/dummy1.json",
//   success: (dummy) => {
//     dummy.forEach((el) => {
//       console.log(el.name);
//     });
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
// console.log("Status-2");
