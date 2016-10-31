var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.static(__dirname + '/views'));


app.get('/', function(req, res) {
	res.render('index.html');
});

app.post('/', function(req, res) {
	res.json({"hello":"world"});
});

app.listen(PORT);