// Piping allows you to turn the output stream of one operation to the input
// stream of another
const fs = require("fs");

const readStream = fs.createReadStream("./somefile.txt");

const writeStream = fs.createWriteStream("./newfile.txt");

readStream.pipe(writeStream);

