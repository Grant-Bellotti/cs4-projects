var express = require('express');
const calc = require('./calculations');
var app = express();

//icon
app.use('/favicon.ico', express.static('favicon.png'));


let type = 0;
let length1 = 0;
let length2 = 0;

//request is info sending to server from client.
//response is info sending to client from server.
app.get("/",function(request,response){
  response.sendFile(__dirname + "/index.html");
});
app.get("/type",function(request,response){
  response.sendFile(__dirname + "/index2.html");
});
app.get('/request', function(req, res){
  res.json(calc.calculate(req.query.shape,type,req.query.num1,req.query.num2));
});
app.get('/set', function(req, res){
  type = parseInt(req.query.type);
  res.json({});
});
app.get('/getType', function(req, res){
  let info = [{"val":type}];
  res.json(info[parseInt(req.query.index)]);
});

var port = process.env.PORT || 3000;

app.listen(port);
