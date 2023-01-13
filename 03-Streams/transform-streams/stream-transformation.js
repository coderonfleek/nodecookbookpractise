// Transform streams help you process data sequentially in chunks
const fs = require("fs");

const {Transform} = require("stream");

const readStream = fs.createReadStream("./somefile.txt");

const writeStream = fs.createWriteStream("./newfile.txt");

const reverse = new Transform(
{
	transform(chunk, encoding, callback){
		//First argument to callback is an error Object if there was 
		// any while processing the input or null otherwise 
		callback(null, chunk.toString().split("").reverse().join(""));	
	}
}
)

readStream.pipe(reverse).pipe(writeStream);
