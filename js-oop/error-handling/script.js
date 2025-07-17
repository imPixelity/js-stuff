// Error Handling
class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter must be more than 0");
    }
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.log(MathUtil.sum());
} catch (err) {
  console.error(err.message);
} finally {
  console.log("Done");
}

class Counter {
  #counter = 0;

  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
