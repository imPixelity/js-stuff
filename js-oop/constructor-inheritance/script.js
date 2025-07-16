// Constructor Inherintance
function DetailInfo(lastName) {
  this.lastName = lastName;
  this.sayHello = function (time) {
    console.log(`Good ${time}, My last name ${lastName}`);
  };
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  DetailInfo.call(this, lastName);
}

const johnny = new Person("Johnny", "Vro");
