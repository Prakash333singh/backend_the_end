//synchronition

// function fun1() {
//   fun2();
//   console.log("hey i am fun1");
// }

// function fun2() {
//   console.log("hey i am fun2");
//   fun3();
// }

// function fun3() {
//   console.log("hey i am fun3");
// }

// fun1();

//asynschronucs
// function fun1() {
//   setTimeout(() => console.log("i am set time out"), 0);
//   process.nextTick(() => console.log("i m process 1"));
//   setImmediate(() => console.log("i m set immediate"));
// }

// function fun2() {
//   console.log("i m fun2");
// }
// function fun3() {
//   console.log("i m fun3");
// }

// fun1();
// fun2();

//i/o block

// const fs = require("fs");

// setTimeout(() => {
//   console.log(" i am set timeout");
// }, 0);

// fs.readFile(__filename, () => {
//   console.log("i m file");
// });

//these two are called microtask callback
// process.nextTick(() => console.log("i am process"));
// Promise.resolve().then(() => console.log("this is Promise"));

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("i am file");
  process.nextTick(() => console.log("i am inside process"));
});

setTimeout(() => {
  console.log(" i am set outside ");
}, 0);
