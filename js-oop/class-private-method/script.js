// Private Method
class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    console.log("Hello");
  }

  #sayWithName(name) {
    console.log(`Hello ${name}`);
  }
}

const john = new Person();
