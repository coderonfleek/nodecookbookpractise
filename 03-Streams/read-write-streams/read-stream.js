const fs = require("fs");

const fileReadStream = fs.createReadStream("./somefile.txt");

//You can also have fileReadStream.setEncoding('UTF8'); to get actual text instead
// of using 'toString()'
fileReadStream.on("data", (chunk) => {
	console.log(chunk.toString());
});
