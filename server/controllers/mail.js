const nodemailer = require('nodemailer')

const USER = process.env.EMAIL
const PASS = process.env.PASSWORD

export const mail = (email,title,body) => {
    
    
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: USER,
            pass: PASS
        }
    })
     
    let mailDetails = {
        from: email,
        to: USER,
        subject: title,
        text: body
    };
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });
}