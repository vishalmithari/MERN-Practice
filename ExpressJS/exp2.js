var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log("Application:", res.app);
    console.log("Headers sent:", res.headersSent);

    res.locals.message = "Hello World";

    res.send(res.locals.message);
});

app.listen(3000);