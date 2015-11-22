// app.js
var express = require('express');
var app = express();

// Add a reponse
app.get('/hello', function(req, res){
  var output = '<html><head><title>HW</title></head><body>';
  output += '<h1>Hello</h1>';
  output += '<p>students!</p><script>alert("hoi")</script>';
  output += '</body></html>';

  res.send(output)
});

// Start the server
app.listen(3000, function () {
  console.log('Started!');
});

// Go to: http://IPADDRESS:3000/hello