const smtpServer = require("smtp-server").SMTPServer;

const mailServer = new smtpServer({
	disabledCommands: ["STARTTLS", "AUTH"], //disable authentication and tls support
	logger: true //log operations to the console
});

mailServer.listen(8080);
