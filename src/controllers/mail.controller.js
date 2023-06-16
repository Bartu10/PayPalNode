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
      text: "Hola, gracias por contactarnos, Saluda a este numero y te respondera nuestro asistente virtual!: 601280212"
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        res.send('Email sent: ' + info.response);
      }
    });
}

