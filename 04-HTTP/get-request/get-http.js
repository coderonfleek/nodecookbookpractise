const http = require("http");

http.get("http://github.com",  (res) => {
	res.pipe(process.stdout);
})
