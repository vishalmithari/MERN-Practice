var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var student = { id: 1, name: "Anuj" };

// GET - Read student
app.get('/student', function(req, res) {
    res.json(student);
});

// POST - Create student
app.post('/student', function(req, res) {
    student = req.body;
    res.send("Student created");
});

// PUT - Update student
app.put('/student', function(req, res) {
    student = req.body;
    res.send("Student updated");
});

// DELETE - Delete student
app.delete('/student', function(req, res) {
    student = null;
    res.send("Student deleted");
});

app.listen(3000);