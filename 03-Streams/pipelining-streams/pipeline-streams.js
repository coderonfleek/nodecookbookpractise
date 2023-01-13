// A stream pipeline can be used to build a chain of multiple streams
// It also has the ability to capture errors at any point in the stream pipeline
const fs = require("fs");

const {pipeline, Transform} = require("stream");

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

pipeline(
	readStream,
	reverse,
	writeStream,
	(err) => {
		if(err) {
			console.error("Error in pipeline. Pipeline failed", err);
		}else{
			console.log("Pipeline successful");
		}
	}
)
