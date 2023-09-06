var express = require("express");
var passport = require("passport");
var path = require("path");

//add or modify.  Code added for you.
var Promise = require('promise');


var User = require("./models/user");
var router = express.Router();

const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Data = require('./Data');

router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});


router.get("/userInfo",function(req,res){
    if (req.isAuthenticated()) {
      db.getData(req.user.username,res);
    }
    else {
      res.json(null);
    }
});

router.post('/create', function(req, res){
    if (req.user.username == "admin") {
      res.json(null);
      return;
    }

  if (req.isAuthenticated()) {
    let obj = new Data(req.user.username,req.body.grade);
    return(db.postData(obj,res));
  } else {
    res.json(null);
  }
});


router.get("/read", function(req, res) {
  if (req.isAuthenticated()) {
    return(db.getData(req.user.username,res));
  } else {
    res.json(null);
  }
});

//add or modify.  Add the needed Promise code below.
router.put("/update", function(req, res) {
	if (req.isAuthenticated()) {
    var Prom1 = db.validUpdate(req.body.grade);
    Prom1.then(
      function(result) {
        if (result) {
          console.log("update");
          let obj = new Data(req.user.username,req.body.grade);
          return(db.putData(obj,res));
        } else {
          console.log("no update");
          return(res.json(null));
        }
      },
      function(err) {
      console.log("no update");
      return(res.json(null));
      }
    );
    /*
      if (db.validUpdate(req.body.grade)) {
          console.log("update");
          let obj = new Data(req.user.username,req.body.grade);
          return(db.putData(obj,res));
      }
      else
      {
          console.log("no update");
          return(res.json(null));
      }
      */
  } else {
  		res.json(null);
  }
});


module.exports = router;
