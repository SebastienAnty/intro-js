import fs from "fs";

const file = fs.readFileSync("./test.jon");
console.log(file.toString());

fs.readFileSync("./test.json");
console.log(file.toString());
const fs = require("fs");

fs.readFile("./test.json", (err, data) => {
  console.log(data.toString());
});
console.log("before");

console.log("first");
setTimeout(() => {
  console.log("third");
  setTimeout(() => {
    console.log("fifth");
  }, 5000);
  setTimeout(() => {
    console.log("fourth");
  }, 2500);
}, 1000);

console.log("second");
