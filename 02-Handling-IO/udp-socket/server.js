const dgram = require('dgram');

const socket = dgram.createSocket("udp6");

const PORT = 3500; //port is not really necessary, the system can always provide a random port

// start listening to connections
socket.bind(PORT);
