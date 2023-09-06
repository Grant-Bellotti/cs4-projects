var express = require("express");
var http = require("http");
var app = express();
app.use(function(req,res,next) {

  var minute = (new Date()).getMinutes();
  if (minute % 2 == 0) {
    next();
  } else {
  	res.statusCode = 403;
    res.end("Server Error");
  }
});
app.use(function(req,res) {
  res.end("Authentication Success.  Password is missionvista");
});
http.createServer(app).listen(3000);
