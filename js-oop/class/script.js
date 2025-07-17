// Class
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.log(`Hello ${name}, I'm ${this.name}`);
  }
}

const Dummy = new Person("Dummy");
