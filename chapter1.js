//modules->once we created any module we can use it in any file in our project
// in Node.js, a module is a reusable block of code that encapsulates related functionality.
// Modules are used to organize and structure your Node.js
//applications by breaking them into smaller, manageable pieces.

// there are three types of module

// 1.core modules->that comes with nodemon.js installation
// 2.local modules->we locally create this module (our own javascript files)
// 3.Third-Party Modules: You can also use third-party modules by installing
//  them using npm (Node Package Manager). Popular third-party modules can add a wide range of
//  functinality to your nodejs application eg-express js

//local modules
// const sayhello = require("./add.js");
// const saythenks = require("./add.js");

// sayhello();
// saythenks();

//bulit in modules
//example-1
// const os = require("os");
// const a = os.freemem();
// console.log(a);

//example-2
// const fs = require("fs");

// fs.readFile("file.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data);
// });

//example 3
// const path = require("path");
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename)); //chapter1.js
// console.log(path.basename(__dirname)); //node js tutorial
// console.log(path.extname(__filename)); //.js

// console.log(path.join("/hello", "/hello", "file.txt"));

//ex-3

const fs = require("fs");

const file = fs.readFileSync("file.txt", "utf-8");
console.log(file);
fs.writeFileSync("text.txt", "pagal hai kya re tu", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("the file has been created");
});
