var express = require('express');
const { response } = require('express');
var app = express();

app.get('/', function (request, response) {

response.send('<h3>Hello world</h3>');

});

app.get('/api/v1/categories', (req, res) =>{
    var categories = ['aerobic', 'strength', 'flexibilty', 'balance'];
    res.json(categories);
});

app.get('/home', (req, res) => {
    res.redirect(301, '/')
})

app.listen(8080, function () {
console.log('Listening on port 8080');
});