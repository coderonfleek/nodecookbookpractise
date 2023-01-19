const http = require("http");

const server = http.createServer((req, res) => {
	if(req.method == "POST"){
		let payload = "";
		req.on("data", (chunk) => {
			payload += chunk.toString();
		});

		req.on("end", () => {
			res.end(payload);
		});
	}
});

server.listen(5000, () => console.log("Node server running"));

//Sample curl request
// Form Url encoded (the default) :curl -d "param1=value1&param2=value2" -X POST http://localhost:5000
// JSON: curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:5000 
