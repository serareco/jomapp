// Dependecies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://root:admin@localhost/admin');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',require('./routes/api'));

// Start server
app.listen(3000);
console.log('Server is running at port 3000');