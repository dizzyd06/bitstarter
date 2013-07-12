
var express = require('express');
var fs = require ('fs');
var buf = new Buffer(4);
var fileData = fs.readFileSync('index.html','utf-8');
buf.write(fileData);
//document.write(fileData);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
