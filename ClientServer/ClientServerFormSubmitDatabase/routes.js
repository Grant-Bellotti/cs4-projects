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

const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Student = require('./student');

/*
function Student(id,name) {
    this.id = id;
    this.name = name;
}
let array = [];
let index = 0;
*/

router.post('/create', function(req, res){
  let identifier = Number(req.body.identifier.trim());
  let name = req.body.name.trim();
  let grade = Number(req.body.grade.trim());
  let drives = req.body.drives;

  if (req.body.identifier == "") {
      res.json({error:true});
      return;
  }
  if (Number.isNaN(identifier)) {
      res.json({error:true});
      return;
  }

  if (name == "") {
    res.json({error:true});
    return;
  }

  let obj = new Student(identifier,name,grade,drives);
  let val = db.postStudent(obj);
  if(val)
    res.json({error:false});
  else
    res.json({error:true});

    //console.log("id = " + identifier);
    //console.log("name = " + name)
});

router.get('/read', function(req, res){
  let identifier = Number(req.query.identifier.trim());

  if (req.query.identifier == "") {
    res.json({error:true});
    return;
  }
  if (Number.isNaN(identifier)) {
    res.json({error:true});
    return;
  }

  let val = db.getStudent(identifier);
  if (val)
    res.json({error:false,name:val.name,grade:val.grade,drives:val.drives});
  else
    res.json({error:true});

});

router.put('/update', function(req, res){
  let identifier = Number(req.body.identifier.trim());
  let name = req.body.name.trim();
  let grade = Number(req.body.grade.trim());
  let drives = req.body.drives;

  if (req.body.identifier == "") {
    res.json({error:true});
    return;
  }
  if (Number.isNaN(identifier)) {
    res.json({error:true});
    return;
  }

  if (name == "") {
    res.json({error:true});
    return;
  }

  let obj = new Student(identifier,name,grade,drives);
  let val = db.putStudent(obj);
  if(val) {
    res.json({error:false});
  }
  else
    res.json({error:true});

});


router.delete('/delete/:identifier', function(req, res){
  let identifier = Number(req.params.identifier.trim());

  if (req.params.identifier == "") {
    res.json({error:true});
    return;
  }
  if (Number.isNaN(identifier)) {
    res.json({error:true});
    return;
  }

    let val = db.deleteStudent(identifier);
    if( val != null)
      res.json({error:false});
    else
      res.json({error:true});

});

module.exports = router;
