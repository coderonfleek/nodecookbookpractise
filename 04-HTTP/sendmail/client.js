const nodemailer = require("nodemailer");

// Create mail transport object
const mailTransport = nodemailer.createTransport({
	host: "localhost",
	port: 8080,
	secure: false
});

let message = {
	from: "mailer@nodeseries.com",
	to: "fik4christ@yahoo.com",
	subject: "Hey you",
	text: "Mailing you from the Node series"
}

mailTransport.sendMail(message, (err, info) => {
	if(err){
		console.error(err);
	}

	console.log("Mail sucessfully sent");
});
