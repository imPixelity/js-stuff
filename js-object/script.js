// Create Object

// Object Literal
const student1 = {
  name: "Student 1 Name",
  email: "student1Email@gmail.com",
  major: "Computer Engineering",
};

const student2 = {
  name: "Student 2 Name",
  email: "student2Email@gmail.com",
  major: "Business",
};

// Function Declaration
function createStudentObject(name, email, major) {
  const temp = {};
  temp.name = name;
  temp.email = email;
  temp.major = major;
  return temp;
}

const student3 = createStudentObject(
  "Student 3 Name",
  "student3Email@gmail.com",
  "Art"
);

// Constructor
function Student(name, email, major) {
  this.name = name;
  this.email = email;
  this.major = major;
}

const student4 = new Student(
  "Student 4 Name",
  "Student4Email@gmail.com",
  "Law"
);
