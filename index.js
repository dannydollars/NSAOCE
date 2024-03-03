const express = require('express');


const app = express();

app.get('/email', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('App is running');
});