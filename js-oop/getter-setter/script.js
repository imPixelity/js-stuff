// Getter & Setter
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const res = value.split(" ");
    this.firstName = res[0];
    this.lastName = res[1];
  }
}

const person = new Person("John", "Doe");
