let path = require("path");
let express = require("express");

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();

//request is info sending to server from client.
//response is info sending to client from server.

let list = [];
let index = 0;

router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});

router.post('/postChat', function(req, res){
  let name = req.body.name.trim();
  let message = req.body.message;

  if (name == "") {
      res.json({error:true});
      return;
  }
  if (message == "") {
      res.json({error:true});
      return;
  }
  let today = new Date();
  let hour = today.getHours();
  if(hour > 12)
    hour -= 12;
  list[index] = ("("+hour + ":" + today.getMinutes() + ") " +
                  name + ": " + message);
  index ++;
  let returnStatement = "";
  for (i=0;i<index;i++) {
    returnStatement += (list[i] + "<br>");
  }
  res.json({sentence:returnStatement});
    //console.log("id = " + identifier);
    //console.log("name = " + name)
});

router.get('/getChat', function(req, res){
  let returnStatement = "";
  for (i=0;i<index;i++) {
    returnStatement += (list[i] + "<br>");
  }
  res.json({sentence:returnStatement});
});

module.exports = router;
