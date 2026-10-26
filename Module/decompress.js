const fs = require('fs');
const zlib = require('zlib');

// Decompress input.txt.gz to output.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('output.txt'));

console.log("File Decompressed.");