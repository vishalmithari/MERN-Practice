var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.get('/', function(req, res) {
    res.send("Middleware Example");
});

app.listen(3000);