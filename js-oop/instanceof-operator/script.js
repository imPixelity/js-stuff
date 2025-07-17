// Instanceof Operator
class Employee {}
class Manager extends Employee {}

const john = new Employee();
const doe = new Manager();

console.log(john instanceof Employee); // 1
console.log(john instanceof Manager); // 0

console.log(doe instanceof Employee); // 1
console.log(doe instanceof Manager); // 1
