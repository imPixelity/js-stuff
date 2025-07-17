// Super Method
class Shape {
  paint() {
    console.log("Paint Shape");
  }
}

class Circle extends Shape {
  paint() {
    super.paint();
    console.log("Paint Circle");
  }
}

const circle = new Circle();
