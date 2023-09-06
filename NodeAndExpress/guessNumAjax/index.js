let express = require('express');
var bodyParser = require('body-parser'); //new, add for post
let path = require("path");

const guessnum = require('./guessNum');

let app = express();
app.use(bodyParser.urlencoded({ extended: true })); //new, add for post
app.use(bodyParser.json());                         //new, add for post

let minVal = 0;
let maxVal = 10;

//req is info sending to server from client.
//res is info sending to client from server.
app.get("/",function(req,res) {
    guessnum.storeNum(minVal,maxVal);
    res.sendFile(path.resolve(__dirname,"index.html"));
});
app.get("/minmax",function(req,res)
    res.sendFile(path.resolve(__dirname,"minMax.html"));
});

app.get("/guess", function(req, res){
//    console.log("in server number chosen is " + req.query.guessNum);
    let guessInfo = guessnum.guessNum(req.query.guessNum);
    if (guessInfo == -1) {
        res.json({answer:"Pick a larger number"});
    } else if (guessInfo == 1) {
        res.json({answer:"Pick a smaller number"});
    } else {
        res.json({answer:"You got it in " + guessnum.getNumTries() + " tries."});
    }
});
/* app.get("/changeminmax",function(req,res) { //old
    minVal = req.query.minV;
    maxVal = req.query.maxV;
    guessnum.storeNum(minVal,maxVal);
    res.json({});
}); */
app.post('/changeminmax', function(req, res){ //new
	minVal = req.body.minV;
	maxVal = req.body.maxV;
	console.log("in changeminmax " + minVal + " " + maxVal);
	guessnum.storeNum(minVal,maxVal);
	res.json({});

});

app.get("/checkminmax",function(req,res) {
    res.json({minV:minVal,maxV:maxVal});
});


//below is a wrapper of http.createServer(requestHandler).listen(3000);
app.listen(3000,function() {
    console.log("started on port 3000");
});
