// you can call an https endpoint by switching to the 'https' module
const http = require("http");

//define payload
const cartItem = `{
	"product" : "Leather Jacket",
	"color" : "Brown",
	"price" : "$56"

}`;


//define request options
const post_request_options = {
	hostname: "postman-echo.com",
	method: "POST",
	path: "/post",
	headers: {
		"Content-Type": "application/json",
	}
}

// build up the request
const post_request = http.request(post_request_options, (res) => {
	console.log(`Response Code: ${res.statusCode}`);
	console.log("Response Body:");
	
	res.pipe(process.stdout);
});

// handle errors
post_request.on("error", (err) => {
	console.log("An error occurred: ", err);
});

post_request.end(cartItem);

