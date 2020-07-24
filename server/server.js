var path = require ('path');
var express = require('express');
const { response } = require('express');
var app = express();

var urlpath = path.join(__dirname, '../frontend/build/')

app.use(express.static(urlpath))

app.get('/api/v1/categories', (req, res) =>{
    var categories = ['aerobic', 'strength', 'flexibilty', 'balance'];
    res.json(categories);
});

app.get('/home', (req, res) => {
    res.redirect(301, '/')
})

app.listen(8000, function () {
console.log('Listening on port 8000');
});