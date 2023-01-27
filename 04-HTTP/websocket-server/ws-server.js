const {WebSocketServer} = require('ws');

const server = new WebSocketServer({port : 5000});

server.on("connection", (socket) =>{
	socket.on("message", (data) => {
		console.log(`Message Received: ${data}`);
	});

	socket.send("Hello client, I have recieved your message");

});
