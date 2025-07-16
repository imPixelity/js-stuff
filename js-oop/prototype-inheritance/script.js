// Prototype Inheritance
function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, I'm Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, I'm Employee ${this.name}`);
};

const employee = new Employee("Employee");
employee.sayHello("Manager");

const manager = new Manager("Manager");
manager.sayHello("Employee");
