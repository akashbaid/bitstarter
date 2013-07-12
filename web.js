var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

//var buf = new Buffer(256);
//function readDone(err, data){
//  buf.write(data);
//}

app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html');
  console.log(buf.toString());
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
