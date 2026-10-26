const fs = require("fs");

console.log("Start");

fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log("File Content:", data);
});

console.log("End");