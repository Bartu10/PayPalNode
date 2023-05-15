import { myEmail, myPassword } from '../config';

export const sendMail =  (req, res) => {

    const {email, name, message} = req.body

    var nodemailer = require('nodemailer');
    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: myEmail,
        pass: myPassword
      }
    });
    
    var mailOptions = {
      from: myEmail,
      to: email,
      subject: `Consulta de ${name}`,
      text: message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        res.send('Email sent: ' + info.response);
      }
    });
}

