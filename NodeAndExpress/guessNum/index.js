var express = require('express');
const guessnum = require('./guessNum');
var app = express();
let minVal = 0;
let maxVal = 10;

//request is info sending to server from client.
//response is info sending to client from server.
app.get("/",function(request,response){
  guessnum.storeNum(minVal,maxVal);
  response.sendFile(__dirname + "/index.html");
});
app.get("/minmax",function(request,response){
  response.sendFile(__dirname + "/index2.html");
});
app.get('/request', function(req, res){
    //res.json(infoList[parseInt(req.query.index)]);
    //res.json(guessnum);
    res.json(guessnum.guessNum(parseInt(req.query.num)));
});
app.get('/requestTries', function(req, res){
  let info = [guessnum.getNumTries()];
  res.json(info[parseInt(req.query.index)]);
});
app.get('/set', function(req, res){
  minVal = parseInt(req.query.min);
  maxVal = parseInt(req.query.max);
});
app.get('/get', function(req, res){
  let info = [{"val":minVal},{"val":maxVal}];
  res.json(info[parseInt(req.query.index)]);
});

var port = process.env.PORT || 3000;

app.listen(port);
