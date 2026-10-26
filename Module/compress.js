const fs = require('fs');
const zlib = require('zlib');

// Compress input.txt to input.txt.gz
fs.createReadStream('inputcompress.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");