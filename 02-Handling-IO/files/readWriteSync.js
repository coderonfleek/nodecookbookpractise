const fs = require('fs');
const path = require('path');

const filepath = path.join(process.cwd(), 'hello.txt');

const contents = fs.readFileSync(filepath, "utf8");

console.log("File Contents:", contents);

const upperContents = contents.toUpperCase();

console.log("Updated content:", upperContents);
