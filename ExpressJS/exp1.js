var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log("Application:", req.app);
    console.log("Base URL:", req.baseUrl);
    console.log("Body:", req.body);
    console.log("Hostname:", req.hostname);
    console.log("Fresh:", req.fresh);

    res.send("Request Object Example");
});

app.listen(3000);