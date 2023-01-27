const http = require("http");
const formidable = require("formidable");

const server = http.createServer((req, res) => {

	if(req.url == "/uploadfiles" && req.method == "POST"){
		const uploader = formidable({ 
					multiples: true, 
					uploadDir: "./files"});

		uploader.parse(req, (err, fields, files) => {
			if(err){
				res.end(String(err));
				return;
			}
			//res.writeHead(200, {'Content-Type': 'application/json'});
			res.end("Files successfully uploaded");
		});
		
	}

	return
});


server.listen(5000, () => { console.log("Server now running")});
