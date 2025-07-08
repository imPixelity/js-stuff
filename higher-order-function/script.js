const number = [1, 2, 4, -5, 10, 5, -2, 7, -6, -3];

// const newArr = [];
// for (let i = 0; i < number.length; i++) {
//   if (number[i] >= 3) {
//     newArr.push(number[i]);
//   }
// }

// Filter
// const newArr = number.filter((num) => {
//   return num >= 3;
// });

// Map
// const newArr = number.map((num) => {
//   return num * 2;
// });

// Reduce
// const newArr = number.reduce((accumulator, currValue) => {
//   return accumulator + currValue;
// }, 5);

// Method Chaining
const total = number
  .filter((num) => {
    return num > 5;
  })
  .map((num) => {
    return num * 3;
  })
  .reduce((accumulator, currValue) => {
    return accumulator + currValue;
  });
