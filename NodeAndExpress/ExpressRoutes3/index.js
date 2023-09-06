var express = require('express');
var app = express();

//request is info sending to server from client.
//response is info sending to client from server.
app.get("/",function(request,response){
	response.sendFile(__dirname + "/index.html");

});

var infoList = [{"name":"Joe"},{"name":"Jim"},{"name":"John"},{"name":"Jeff"}];
app.get('/request', function(req, res){
	res.json(infoList[parseInt(req.query.index)]);
});

var port = process.env.PORT || 3000;

app.listen(port);
