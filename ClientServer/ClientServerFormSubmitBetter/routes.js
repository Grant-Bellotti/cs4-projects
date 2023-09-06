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

let array = function(id,name) {
    this.id = id;
    this.name = name;
}
let index = 0;

router.post('/create', function(req, res){
  let tempIdentifier = Number(req.body.identifier.trim());
  let tempName = req.body.name.trim();
  for (let i=0;i<index;i++) {
    if(tempIdentifier == array[i].id) {
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
    let student = new array(tempIdentifier,tempName);
    array[index] = student;
    console.log("id = " + array[index].id);
    console.log("name = " + array[index].name);
    index++;
    res.json({error:false});
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
  for (let i=0;i<index;i++) {
    if(array[i].id == tempIdentifier) {
      console.log("id = " + array[i].id);
      console.log("name = " + array[i].name);
      res.json({name:array[i].name});
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
    if(array[i].id == tempIdentifier) {
      console.log(array[i].name + " is now " + tempName + " at id " + array[i].id);
      array[i].name = tempName;
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
    if(array[i].id == tempIdentifier) {
      console.log(array[i].name + " at id " + array[i].id + " deleted");
      delete array[i];
      console.log(array);
      index--;
      res.json({error:false});
      return;
    }
  }
    res.json({error:true});
});

module.exports = router;
