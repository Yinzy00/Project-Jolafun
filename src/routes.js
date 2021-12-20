const express = require('express'),
app = express(),
springkasteelRoute = require('./springkasteelRoute')
;

app.get('/', function (req, res) {
    res.send(`
    <h1>Welkom bij de api</h1><br/><br/>
    <h3>Mogelijke routes:</h3><br/><br/>
    /springkasteel
    `);
    console.log("route / called");
});

app.use('/springkasteel', springkasteelRoute);

module.exports = app;