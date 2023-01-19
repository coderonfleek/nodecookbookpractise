const http = require("http");

const server = http.createServer((request, response) => {
	console.log(`Request Method: ${request.method}`);
	console.log(`Request Path: ${request.url}`);
	
	//Handle the root path request
	if(request.method == "GET" && request.url == "/"){
		response.end(`Welcome to the Nodejs API`);
	}

});

server.listen(5000, () => {
	console.log("HTTP Server now running");
})
