// Creating Object in JavaScript
// (Property -> value, Method -> function)
// 1. Object Literal
// let student1 = {
//   name: "Student1",
//   energy: 10,
//   eat: function (portion) {
//     this.energy += portion;
//     console.log(`${this.name}->Eat`);
//   },
// };

// let student2 = {
//   name: "Student2",
//   energy: 10,
//   eat: function (portion) {
//     this.energy += portion;
//     console.log(`${this.name}->Eat`);
//   },
// };

// 2. Function Declaration
// const methodStudent = {
//   eat: function (portion) {
//     this.energy += portion;
//     console.log(`${this.name}->Eat`);
//   },

//   play: function (time) {
//     this.energy -= time;
//     console.log(`${this.name}->Play`);
//   },

//   sleep: function (time) {
//     this.energy += time * 2;
//     console.log(`${this.name}->Sleep`);
//   },
// };

// function Student(name, energy) {
//   let temp = {};
//   temp.name = name;
//   temp.energy = energy;
//   temp.eat = methodStudent.eat;
//   temp.play = methodStudent.play;
//   temp.sleep = methodStudent.sleep;

//   return temp;
// }

// let student1 = Student("Student1", 10);
// let student2 = Student("Student2", 20);

// 3. Constructor Function (keyword: new)
// function Student(name, energy) {
//   this.name = name;
//   this.energy = energy;

//   this.eat = function (portion) {
//     this.energy += portion;
//     console.log(`${this.name}->Eat`);
//   };

//   this.play = function (time) {
//     this.energy -= time;
//     console.log(`${this.name}->Play`);
//   };
// }

// let student1 = new Student("Student1", 10);
// let student2 = new Student("Student2", 20);

// 4. Object.create()
// const methodStudent = {
//   eat: function (portion) {
//     this.energy += portion;
//     console.log(`${this.name}->Eat`);
//   },

//   play: function (time) {
//     this.energy -= time;
//     console.log(`${this.name}->Play`);
//   },

//   sleep: function (time) {
//     this.energy += time * 2;
//     console.log(`${this.name}->Sleep`);
//   },
// };

// function Student(name, energy) {
//   let temp = Object.create(methodStudent);
//   temp.name = name;
//   temp.energy = energy;

//   return temp;
// }

// let student1 = Student("Student1", 10);
// let student2 = Student("Student2", 20);
