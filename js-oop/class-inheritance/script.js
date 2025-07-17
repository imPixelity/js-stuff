// Class Inheritance
class Employee {
  sayHello(name) {
    console.log(`Hello ${name}, I'm Employee ${this.name}`);
  }

  sayBye(name) {
    console.log(`Bye ${name}, I'm ${this.name}`);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.log(`Hello ${name}, I'm ${this.name}`);
  }
}

const employee = new Employee();
employee.name = "Employee";

const manager = new Manager();
manager.name = "Manager";
