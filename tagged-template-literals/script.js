// Tagged Templates
// const user = "user1";
// const age = 123;
// function print(strings, ...args) {
//   //   let res = ``;
//   //   strings.forEach((str, i) => {
//   //     res += `${str}${args[i] || ""}`;
//   //   });
//   //   return res;

//   return strings.reduce((result, str, i) => {
//     `${result}${str}${args[i]} || ""`;
//   }, "");
// }

// const str = print`Hi, I'm ${user}, ${age}`;

// Highlight
// const user = "user1";
// const age = 123;
// function highlight(strings, ...args) {
//   return strings.reduce((result, str, i) => {
//     return `${result}${str}<span class="hl">${args[i] || ""}</span>`;
//   }, "");
// }

// const str = highlight`Hi, I'm ${user}, ${age}`;

// document.body.innerHTML = str;
