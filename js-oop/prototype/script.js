// Prototype
function PersonClass(firstName, lastName) {
  // Instance Object
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (time) {
    console.log(`Good ${time}, I am ${firstName} ${lastName}`);
  };
}

PersonClass.prototype.sayBye = function () {
  console.log(`Bye ${this.firstName}`);
};

const john = new PersonClass("John", "Doe");
