const express = require('express');
const nodemailer = require('nodemailer');


const app = express();

app.get('/email', (req, res) => {

});

app.post ('/email', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });
});


app.listen(process.env.PORT || 3000, () => {
    console.log('App is running');
});

