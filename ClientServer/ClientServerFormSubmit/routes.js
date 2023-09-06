let path = require("path");
let express = require("express");

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();

//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});

let name = [];
let id = [];
let index = 0;

router.post('/create', function(req, res){
  let tempIdentifier = Number(req.body.identifier.trim());
  let tempName = req.body.name.trim();
  for (let i=0;i<index;i++) {
    if(tempIdentifier == id[i]) {
      res.json({error:true});
      return;
    }
  }
    if (req.body.identifier == "") {
        res.json({error:true});
        return;
    }
    if (Number.isNaN(tempIdentifier)) {
        res.json({error:true});
        return;
    }
    if (tempName == "") {
        res.json({error:true});
        return;
    }
    id[index] = tempIdentifier;
    name[index] = tempName;
    console.log("id = " + id[index]);
    console.log("name = " + name[index]);
    index++;
    res.json({name:false});
});

router.get('/read', function(req, res){
  let tempIdentifier = Number(req.query.identifier.trim());
  if (req.query.identifier == "") {
      res.json({error:true});
      return;
  }
  if (Number.isNaN(tempIdentifier)) {
      res.json({error:true});
      return;
  }
  //console.log("id = " + identifier);
  for (let i=0;i<index;i++) {
    if(id[i] == tempIdentifier) {
      console.log("id = " + id[i]);
      console.log("name = " + name[i]);
      res.json({name:name[i]});
      return;
    }
  }
    res.json({error:true});
});

router.put('/update', function(req, res){
  let tempIdentifier = Number(req.body.identifier.trim());
  let tempName = req.body.name.trim();
  if (req.query.identifier == "") {
      res.json({error:true});
      return;
  }
  if (Number.isNaN(tempIdentifier)) {
      res.json({error:true});
      return;
  }
  if (tempName == "") {
      res.json({error:true});
      return;
  }
  for (let i=0;i<index;i++) {
    if(id[i] == tempIdentifier) {
      console.log(name[i] + " is now " + tempName + " at id " + id[i]);
      name[i] = tempName;
//      res.json({name:name[i]});
      return;
    }
  }
    res.json({error:true});
});
router.delete('/delete/:identifier', function(req, res){
  let tempIdentifier = Number(req.params.identifier.trim());
  if (req.params.identifier == "") {
      res.json({error:true});
      return;
  }
  if (Number.isNaN(tempIdentifier)) {
      res.json({error:true});
      return;
  }
  for (let i=0;i<index;i++) {
    if(id[i] == tempIdentifier) {
      console.log(name[i] + " at id " + id[i] + " deleted");
      name.splice(i,1);
      id.splice(i,1);
      console.log("ids = " + id);
      console.log("names = " + name);
      index--;
      res.json({error:false});
      return;
    }
  }
    res.json({error:true});
});

module.exports = router;
