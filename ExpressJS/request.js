var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', function(req, res) {
    res.send(`
        <form method="POST" action="/submit">
            Name: <input name="name">
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit', function(req, res) {
    res.cookie('student', req.body.name);

    res.send("Welcome " + req.body.name);
});

app.get('/cookie', function(req, res) {
    res.send("Cookie: " + (req.cookies.student || "Not set"));
});

app.listen(3000);