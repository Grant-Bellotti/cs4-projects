var express = require("express");
var http = require("http");
var app = express();

app.use(function(req,res,next){
   console.log("In comes a request to: " + req.url);
   next();
});

app.use(jylogger("short"));

function jylogger(val) {
	console.log("here1")
	return(function(req,res,next) {
		console.log("here2")
		next();
	})
}
app.use(function(req,res,next){
   console.log("here3");
   next();
//    res.end("done with it");
});

app.get("/",function(req,res) {
    res.end("Welcome to the home page");

});
app.get("/favicon.ico",function(req,res) {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    console.log('favicon requested');
});
app.get("/about",function(req,res) {
    res.end("Welcome to the about page");
});


app.use(function(req,res){
  res.statusCode = 404;
  console.log('error');
    res.end("Error! File not found");
});
http.createServer(app).listen(3000);
