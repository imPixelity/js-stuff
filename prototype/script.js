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
// function Student(name, energy) {
//   let temp = {};
//   temp.name = name;
//   temp.energy = energy;

//   temp.eat = function (portion) {
//     this.energy += portion;
//     console.log(`${this.name}->Eat`);
//   };

//   temp.play = function (time) {
//     this.energy -= time;
//     console.log(`${this.name}->Play`);
//   };

//   return temp;
// }

// let student1 = Student("Student1", 10);
// let student2 = Student("Student2", 20);

// 3. Constructor Function (keyword: new)
function Student(name, energy) {
  this.name = name;
  this.energy = energy;

  this.eat = function (portion) {
    this.energy += portion;
    console.log(`${this.name}->Eat`);
  };

  this.play = function (time) {
    this.energy -= time;
    console.log(`${this.name}->Play`);
  };
}

let student1 = new Student("Student1", 10);
let student2 = new Student("Student2", 20);
