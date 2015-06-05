var express = require('express');
var app = express();

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var serveStatic = express.static('public');
app.use(serveStatic);


var port = process.env.PORT || 3000;

var truckRouter = require('./routes/truckRoutes');

app.use('/trucks', truckRouter);

app.listen(port, function() {
	console.log('Listening on port ', port);
});