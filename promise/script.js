// $.ajax({
//   url: "data/dummy1.json",
//   success: (d) => {
//     console.log(d);
//   },
//   error: () => {},
// });

// ================================================

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open("get", "data/dummy1.json");
// xhr.send();

// ================================================

// const data = fetch("data/dummy1.json");
// console.log(data);
// // Resulting promise

// ================================================

// fetch("data/dummy1.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     return console.log(response);
//   });

// ================================================

// Promise
// Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// action (then / catch)

// let test = true;
// const promise1 = new Promise((resolve, reject) => {
//   if (test) {
//     resolve(`Resolved`);
//   } else {
//     reject(`Rejected`);
//   }
// });

// promise1
//   .then((resp) => {
//     console.log(`1, ${resp}`);
//   })
//   .catch((resp) => {
//     console.log(`2, ${resp}`);
//   });

// ================================================

// let test = true;
// const promise2 = new Promise((resolve, reject) => {
//   if (test) {
//     setTimeout(() => {
//       resolve(`Resolved`);
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject(`Rejected`);
//     }, 2000);
//   }
// });

// console.log("Status1");
// // console.log(
// //   promise2.then(() => {
// //     return console.log(promise2);
// //   })
// // );

// promise2
//   .finally(() => {
//     console.log(`3`);
//   })
//   .then((resp) => {
//     console.log(`1, ${resp}`);
//   })
//   .catch((resp) => {
//     console.log(`2, ${resp}`);
//   });

// console.log("Status2");

// ================================================

// const test1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         title: `1111`,
//         date: `1111`,
//       },
//     ]);
//   }, 1000);
// });

// const test2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         id: `11`,
//         temp: `11`,
//       },
//     ]);
//   }, 500);
// });

// test1.then((response) => {
//   console.log(response);
// });
// test2.then((response) => {
//   console.log(response);
// });

// Promise.all([test1, test2]).then((resp) => {
//   console.log(resp);
// });

// Promise.all([test1, test2]).then((resp) => {
//   const [test1, test2] = resp;
//   console.log(test1);
//   console.log(test2);
// });
