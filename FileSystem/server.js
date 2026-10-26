const fs = require("fs");

// 1. WRITE / CREATE FILE

fs.writeFileSync("data.txt", "Hello from Node.js!");
console.log("1. File created and data written.");


// 2. OPEN FILE

fs.open("data.txt", "r", (err, file) => {
    if (err) {
        console.log("Error opening file");
        return;
    }
    console.log("2. File opened successfully.");
});

// 3. READ FILE

fs.readFile("data.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }
    console.log("3. File content:");
    console.log(data);
});


// 4. APPEND DATA

fs.appendFile("data.txt", "\nWelcome to MERN Stack!", (err) => {
    if (err) {
        console.log("Error appending data");
        return;
    }
    console.log("4. Data appended successfully.");
});


// 5. CREATE DIRECTORY

if (!fs.existsSync("myfolder")) {
    fs.mkdirSync("myfolder");
    console.log("5. Directory created.");
} else {
    console.log("5. Directory already exists.");
}

// 6. READ DIRECTORY

fs.readdir(".", (err, files) => {
    if (err) {
        console.log("Error reading directory");
        return;
    }
    console.log("6. Files and folders:");
    console.log(files);
});


// 7. PROCESS OBJECT

console.log("\n========== PROCESS OBJECT ==========");

console.log("Node Version:", process.version);

console.log("Platform:", process.platform);

console.log("Process ID:", process.pid);

console.log("Current Directory:", process.cwd());

console.log("Command Line Arguments:", process.argv);

console.log("Environment PORT:", process.env.PORT || "Not Set");


// 8. PROCESS EXIT

// process.exit(0);

// Global Variables and Functions in Node.js

console.log("===== NODE.JS GLOBALS =====");

// 1. __dirname
console.log("Current Directory:");
console.log(__dirname);

// 2. __filename
console.log("\nCurrent File:");
console.log(__filename);

// 3. console
console.log("\nConsole Example:");
console.log("Hello from Node.js");

// 4. process
console.log("\nProcess Information:");
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Current Working Directory:", process.cwd());


// 5. process.env
console.log("\nEnvironment:");
console.log("NODE_ENV:", process.env.NODE_ENV);

// 6. global
console.log("\nGlobal Object:");
global.studentName = "Anuj";
console.log("Student Name:", global.studentName);

// 7. setTimeout()
console.log("\nsetTimeout Example:");
setTimeout(() => {
    console.log("This message runs after 2 seconds");
}, 2000);

// 8. setInterval()
let count = 0;

const interval = setInterval(() => {
    count++;
    console.log("setInterval:", count);

    // Stop after 3 executions
    if (count === 3) {
        clearInterval(interval);
        console.log("Interval stopped");
    }
}, 1000);

// 9. setImmediate()
setImmediate(() => {
    console.log("setImmediate executed");
});