const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
    let fname = req.body.fname,
        lname = req.body.lname,
        email = req.body.email,
        message = req.body.message;

    let transporter = nodemailer.createTransport({
        host: "mail.tatesepicweb.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'tkd@tatesepicweb.com', // generated ethereal user
          pass: '69VSwRt68nuTJvh' // generated ethereal password
        }
      });
    
      // send mail with defined transport object
      transporter.sendMail({
        from: fname + " " + lname + ' <tkd@tatesepicweb.com>', // sender address
        to: email, // list of receivers
        subject: message, // Subject line
        text: message // plain text body
      });

      res.redirect('/')
})

module.exports = router