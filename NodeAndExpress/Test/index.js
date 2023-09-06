var express = require('express');
const stringChange = require('./stringManip');
var app = express();
let type = 0;

//request is info sending to server from client.
//response is info sending to client from server.
app.get("/",function(request,response){
  response.sendFile(__dirname + "/index.html");
});
app.get("/manip",function(request,response){
  response.sendFile(__dirname + "/index2.html");
});
app.get("/manipCheck",function(req,res){
  let info = [{"val":type}];
  res.json(info[parseInt(req.query.index)]);
});
app.get('/manipChange', function(req, res){
  type = parseInt(req.query.type);
});
app.get('/operation', function(req, res){
  let temp = req.query.word;
    res.json(stringChange.change(temp,type));
});

var port = process.env.PORT || 3000;

app.listen(port);
