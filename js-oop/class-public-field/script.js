// Public Field
class Customer {
  firstName;
  lastName;
  bal = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {}
}

const cust = new Customer("John", "Doe");
