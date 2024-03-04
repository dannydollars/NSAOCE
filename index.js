const dotenv = require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');

const transporter = nodemailer.createTransport({
    host: 'mail.pathfinder-group.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});

const app = express();

app.get('/email', (req, res) => {
console.log("hi")
});

const upload = multer();

app.post('/send-email', upload.none(), (req, res) => {
   res.send('Form data received!');

   transporter.sendMail({
        from: process.env.USER,
    to:'dmatheson@pathfinder-group.com',
    subject: req.body.Subject,
    text: req.body.Body,
    replyTo:req.body.from
    })
})




app.listen(process.env.PORT || 3000, () => {
    console.log('App is running');
});

