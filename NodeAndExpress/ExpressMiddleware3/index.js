let express = require("express");
let http = require("http");
let logger = require("morgan");

let app = express();

app.use(logger("short"));
//app.use(jylogger("short"));

//function jylogger(val) {
//	console.log("here1")
//	return(function(req,res,next) {
//		console.log("here2")
//		next();
//	})
//}

app.use(function(req,res,next) {
  console.log("here3")
  let minute = (new Date()).getMinutes();
  if (minute % 2 == 0) {
    next();
  } else {
  	res.statusCode = 403;
    res.end("Server Error");
  }
});

app.use(function(req,res) {
  console.log("here4")
  res.end("Authentication Success.  Password is missionvista");
});
http.createServer(app).listen(3000);
