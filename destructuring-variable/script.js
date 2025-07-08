// Destructuring Variable / Assignment

// Destructuring Array
// const introduction = ["Hi", "my", "name", "is"];
// const [a, b, c, d] = introduction;
// const [a, , , d] = introduction;

// Swap
// let a = 5;
// b = 10;
// console.log(([a, b] = [b, a]));

// Return value in function
// function test() {
//   return [1, 2];
// }
// const [a, b] = test();
// console.log(a, b);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(values);

// Destructuring Object
// const student = {
//   name: "student1",
//   age: 123,
// };
// const { name, age } = student;

// Assignment without object declaration
// ({ name, age } = {
//   name: "student1",
//   age: 123,
// });
// console.log(name);

// Assignment to new variable
// const student = {
//   name: "student1",
//   age: 123,
// };
// const { name: a, age: b } = student;

// Default value
// const student = {
//   name: "student1",
//   age: 123,
// };
// const { name, age, email = `${name}@gmail.com` } = student;

// Default value + assignment
// const student = {
//   name: "student1",
//   age: 123,
//   email: "studentNew@gmail.com",
// };
// const { name: a, age: b, email: c = `${name}@gmail.com` } = student;

// Rest parameter
// const student = {
//   name: "student1",
//   age: 123,
//   email: "studentNew@gmail.com",
// };
// const { name, ...values } = student;

// Accessing a field from an object after it is passed as a parameter to a function
// const student = {
//   id: 123,
//   name: "student1",
//   age: 123,
//   email: "studentNew@gmail.com",
// };

// function getId({ id }) {
//   return id;
// }

// console.log(getId(student));
