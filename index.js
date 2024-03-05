require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
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
app.use(cors());

app.get('/email', (req, res) => {
console.log("hi")
});

const upload = multer();

app.post('/send-email', upload.none(), (req, res) => {
   res.send('Form data received!');
console.log(req.body)
   transporter.sendMail({
        from: process.env.USER,
    to:'danielcmatheson@gmail.com',
    subject: "contact form submission from "+req.body.name,
    text: req.body.message,
    replyTo:req.body.email
    })
})




app.listen(process.env.PORT || 3000, () => {
    console.log('App is running');
});

