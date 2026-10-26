const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("student.txt", "utf8");

console.log("File Content:", data);

console.log("End");