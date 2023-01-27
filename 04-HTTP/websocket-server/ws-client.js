const WebSocket = require('ws');

const client = new WebSocket("ws://localhost:5000");

client.on("open", () => {
	client.send("Hey Websocket server");
})

client.on("message", (data)=>{
	console.log(`From Server: ${data}`);
});
