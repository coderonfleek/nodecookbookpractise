const fs = require('fs');

const file = './file.txt';

// 'current' and 'previous' are both Stats objects
// There is also a 'watch' function that can watch both files and directories
fs.watchFile(file, (current, previous) => {
	return console.log(`${file} update ${current.mtime}`);
});
