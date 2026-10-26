const fs = require('fs');

// Create readable stream
const readerStream = fs.createReadStream('input.txt');

// Create writable stream
const writerStream = fs.createWriteStream('output.txt');

// Pipe input.txt to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");