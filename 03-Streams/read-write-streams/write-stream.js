const fs = require("fs");

// You can also supply an options object to define options like
// file encoding, file permissions, the position to start writing the file etc
const fileStream = fs.createWriteStream("./somefile.txt");
/**
for (count = 0; count <=100; count++){
	fileStream.write("Welcome to DevTalk with FK\n");
}
**/

setInterval(() => {
	fileStream.write("Welcome to Devtalk with FK\n");
}, 1000);
