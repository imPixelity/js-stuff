// Rest Parameter

// function myFunc(...values) {
//   return values; // Array
//   return arguments; // Not array
//   console.log([...arguments]); // Array
//   console.log(Array.from(arguments)); // Array
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// ========================================================

// function sum(...values) {
//   return values.reduce((accumulator, currValue) => {
//     return accumulator + currValue;
//   });

//   let total = 0;
//   for (const v of values) {
//     total += v;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

// ========================================================

// Array Destructuring
// const alpha = ["A-1", "A-2", "A-3", "A-4", "A-5"];
// const [leader, coLeader, ...members] = alpha;
// console.log(members);

// ========================================================

// Object Destructuring
// const beta = {
//   pm: "B-1",
//   fe: "B-2",
//   be: "B-3",
//   do: "B-4",
//   ux: "B-5",
// };

// const { pm, ...Teams } = beta;
// console.log(Teams);

// ========================================================

// function filterBy(typeData, ...values) {
//   return values.filter((v) => {
//     return typeof v === typeData;
//   });
// }

// console.log(filterBy("number", 3, 5, true, "what", false, 10));
