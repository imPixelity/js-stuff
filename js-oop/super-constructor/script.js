// Super Constructor
class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    console.log(`Hello ${name}, I'm Employee ${this.firstName}`);
  }

  sayBye(name) {
    console.log(`Bye ${name}, I'm ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    // Super is a must
    super(firstName);
    this.lastName = lastName;
  }

  sayHello(name) {
    console.log(`Hello ${name}, I'm ${this.firstName} ${this.lastName}`);
  }
}

const employee = new Employee("Employee");
const manager = new Manager("Mr.", "Manager");
