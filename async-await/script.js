// const test = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done");
//   }, 2000);
// });
// console.log(test);
// test.then((resp) => console.log(resp));

// =================================================

function testPromise() {
  return new Promise((resolve, reject) => {
    const timer = 5000;
    if (timer < 5000) {
      setTimeout(() => {
        resolve("Done");
      }, timer);
    } else {
      reject("Failed");
    }
  });
}

// const test = testPromise();
// test.then((resp) => console.log(resp)).catch((resp) => console.log(resp));

async function testAsync() {
  try {
    const test = await testPromise();
    console.log(test);
  } catch (err) {
    console.log(err);
  }
}

testAsync();
