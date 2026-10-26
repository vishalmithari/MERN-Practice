const fs = require("fs");
const zlib = require("zlib");

// Compress the file
fs.createReadStream("inputchain.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("input.txt.gz"));

console.log("File Compressed.");

// Decompress the file
setTimeout(() => {
    fs.createReadStream("input.txt.gz")
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream("outputchain.txt"));

    console.log("File Decompressed.");
}, 1000);