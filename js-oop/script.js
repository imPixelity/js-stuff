// Constructor Function
function PersonClass(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (time) {
    console.log(`Good ${time}, I am ${firstName} ${lastName}`);
  };
}

const john = new PersonClass("John", "Doe");
