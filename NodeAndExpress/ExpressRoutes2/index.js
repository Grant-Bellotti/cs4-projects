let express = require('express');
let logger = require("morgan");
let path = require("path");
let app = express();

app.use(logger("short"));

//req is info sending to server from client.
//res is info sending to client from server.
app.get("/",function(req,res) {
	console.log(path.resolve(__dirname,"index.html"));
	res.sendFile(path.resolve(__dirname,"index.html"));
});

let info = {"name":"Joe"}     //javascript object
app.get("/request", function(req, res){
	res.json(info);
});

let info2 = {"fred":"Stuff"}    //javascript object
app.get("/another", function(req, res){
	res.json(info2);
});

let info3 = {"name":"Third"}    //javascript object
app.get("/third", function(req, res){
	res.json(info3);
});

//below is a wrapper of http.createServer(requestHandler).listen(3000);
app.listen(3000,function() {
	console.log("started on port 3000");
});
