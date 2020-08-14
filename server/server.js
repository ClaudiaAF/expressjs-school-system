var path = require('path');
var express = require('express');
const { response } = require('express');
var app = express();
var logger = require('./logger');
const data = require('../data/data');

var urlpath = path.join(__dirname, '../frontend/build/')

app.use(logger);

app.use(express.static(urlpath));

app.param('name', function (request, response, next) {
    request.lowerName = request.params.name.toLowerCase();
    next();
});

//Get all classes
app.get('/api/classes/', function (req, res) {
    res.json(data.classes);
});

//Get all slots
app.get('/api/slots/', (req, res) => {
    res.json(data.slots);
});

//Get all teachers
app.get('/api/teachers', (req, res) => {
    res.json(data.teachers);
});

//Get project brief
app.get('/api/brief', (req, res) => {
    res.json(data.brief);
});

// Re-direct home
app.get('/home', (req, res) => {
    res.redirect(301, '/')
})

//Get teachers name

app.get('/api/teachers/:name', function (req, res) {
    var room = null;
    for (var i = 0; i < data.teachers.length; i++) {
        if (data.teachers[i].name === req.params.name) {
            room = data.teachers[i];
            res.json(data.teachers[i]);
        }
    }

    if (room == null) {
        response.status(404).json("No teacher named '" +
            request.params.name + "' found.");
    }
});

app.get('/api/details/:classId', function (req, res) {
    var results = { subject: null, teacher: null, learners: [], times: [], classroom: null };
    var classId = parseInt(req.params.classId, 10);
    var lesson = data.classes.find((lesson) => lesson.id === classId);

    results.subject = lesson.subject;

    //class teacher
    var teacher = data.teachers.find((teach) => teach.classes.includes(classId));
    results.teacher = teacher.name;

    //class students
    var students = data.learners.filter((student) => student.classes.includes(classId));

    results.learners = students;

    //class time
    var classTime = data.slots.find((time) => time.slot === lesson.slot);
    results.times = classTime.times;

    //class number
    results.classroom = lesson.classroom;

    res.json(results);
});


// Get classes taught by specific teacher
app.get('/api/classes/teachers/:teacherId', function (req, res) {
    var teacherId = parseInt(req.params.teacherId, 10);
    var teacher = data.teachers.find((teacher) => teacher.id === teacherId);

    var classList = [];
    for (var i = 0; i < teacher.classes.length; i++) {
        var classTaught = data.classes.find((classTaught) => classTaught.id === teacher.classes[i])
        classList.push(classTaught);
    }
    res.json(classList);
});



// Get students in a specific class
app.get('/api/classes/learners/:learnerId', function (req, res) {
    var learnerId = parseInt(req.params.learnerId, 10);
    var learner = data.learners.find((l) => l.id === learnerId);

    var classList = [];
    for (var i = 0; i < learner.classes.length; i++) {
        var takenClass = data.classes.find((takenClass) => takenClass.id === learner.classes[i]);
        classList.push(takenClass);
    }
    res.json(classList);

    if (learner, learnerId == null) {
        res.status(404).json("No learner named '" +
            req.params.classroom + "' found.");
    }
});


//login with email and password
app.get('/api/login', function(req,res) {
	var teacher1 = -1;

	for (var i = data.teachers.length - 1; i >= 0; i--) {
		if (data.teachers[i].email == req.query.email) {
			teacher1 = i;
		}
	}

	if ((teacher1 != -1) && (req.query.password == data.teachers[teacher1].password)) {
		res.json(data.teachers[teacher1].id);
	} else {
		res.status(404).send("Sorry, incorrect email and/or password");
	}
});



//Get classroom number

app.get('/api/classes/:classroom', function (req, res) {
    var room = null;
    for (var i = 0; i < data.classes.length; i++) {
        if (data.classes[i].classroom === req.params.classroom) {
            room = data.classes[i];
            res.json(data.classes[i]);
        }
    }

    if (room == null) {
        res.status(404).json("No room named '" +
            req.params.classroom + "' found.");
    }
});



app.listen(8000, function () {
    console.log('Listening on port 8000');
});