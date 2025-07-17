// Class Error
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "Total parameter must be more than 0",
        "numbers"
      );
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
  if (err instanceof ValidationError) {
    console.error(`Error: ${err.message}\nField: ${err.field}`);
  } else {
    console.error(err.message);
  }
} finally {
  console.log("Done");
}
