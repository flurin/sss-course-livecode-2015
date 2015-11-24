// app.js
var express = require('express');
var app = express();
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routers
var carsRouter = require('./routes/cars');

app.use('/autos', carsRouter);

app.get('/hello', function(req, res){
  res.render('hello');
})

// Start the server
app.listen(3000, function () {
  console.log('Started!');
});

// Go to: http://IPADDRESS:3000/cars