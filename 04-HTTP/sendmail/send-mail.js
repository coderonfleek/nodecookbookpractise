const nodemailer = require("nodemailer");

async function sendNodeMail (){

	let mailTransport = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: 'fikfikky@gmail.com',
			pass: 'jwtvuyuwayqsktje'
		}
	});

	let message = {
		from: "mailer@nodepractise.com",
		to: "fik4christ@yahoo.com",
		subject: "Hey you",
		text: "A simple message from FK"
	}

	const mailResponse = await mailTransport.sendMail(message);

	console.log(`Message successfully sent: ${JSON.stringify(mailResponse)}`);

}

sendNodeMail().catch(console.log)
