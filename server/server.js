var path = require('path');
var express = require('express');
const { response } = require('express');
var app = express();
var logger = require('./logger');
const data = require('../data/data');
const { classes } = require('../data/data');

var urlpath = path.join(__dirname, '../frontend/build/')

app.use(logger);

app.use(express.static(urlpath));

app.param('name', function (request, response, next) {
    request.lowerName = request.params.name.toLowerCase();
    next();
});

app.get('/api/teachers', (req, res) => {
    res.json(data.teachers);
});

app.get('/api/classes/', function (req, res) {
    res.json(data.classes);
});

app.get('/api/slots/', (req, res) => {
    res.json(data.slots);
});


app.get('/api/teachers', (req, res) => {
    res.json(data.teachers);
});

app.get('/api/brief', (req, res) => {
    res.json(data.brief);
});

app.get('/home', (req, res) => {
    res.redirect(301, '/')
})

app.get('/api/teachers/:name', function (request, response) {
    var room = null;
    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].name === request.params.name) {
            room = data.teachers[i];
            response.json(data.teachers[i]);
        }
    }

    if (room == null) {
        response.status(404).json("No teacher named '" +
            request.params.name + "' found.");
    }
});


app.get('/api/teachers/:classes', function (request, response) {
    var classes = null;
    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].classes === request.params.classes) {
            classes = data.teachers[i];
            response.json(data.teachers[i]);
        }
    }

    if (room == null) {
        response.status(404).json("No classroom named '" +
            request.params.name + "' found.");
    }
});

app.get('/api/classes/:classroom', function (request, response) {
    var room = null;
    for (var i = 0; i < data.classes.length; i++) {
        if (data.classes[i].classroom === request.params.classroom) {
            room = data.classes[i];
            response.json(data.classes[i]);
        }
    }

    if (room == null) {
        response.status(404).json("No room named '" +
            request.params.classroom + "' found.");
    }
});


app.get('/api/categories/:name/exercises', function (request, response) {
    var results = [];
    var lowerName = request.params.name.parseInt();
    for (var i = 0; i < data.exercises.length; i++) {
        if (data.exercises[i].category === lowerName) {
            results.push(data.exercises[i]);
        }
    }

    for (var i = 0; i < data.exercises.length; i++) {
        if (data.exercises[i].category === lowerName) {
            results.push(data.exercises[i]);
        }
    }
    response.json(results);
});



app.get('/api/classes/:slot/slots', function (request, response) {
    var results = [];
    var slot = request.params.slot;
    for (var i = 0; i < data.slots.length; i++) {
        if ((data.slots[i].slot === parseInt(slot))) {
            results.push(data.slots[i]);
        }
    }
    response.json(results);
});




app.listen(8000, function () {
    console.log('Listening on port 8000');
});