var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const { USER, PASS } = require("./cred.js");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport(smtpTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    auth: {
        user: USER,
        pass: PASS
    }
}));
// setup e-mail data with unicode symbols
var mailOptions = {
    from: "Vapet <3210181@gmail.com>",
    to: "3210181@gmail.com, vapet@list.ru",
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
}
// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    } else {
        console.log("Message sent: " + response.response);
    }
// shut down the connection pool, no more messages
    smtpTransport.close();
});