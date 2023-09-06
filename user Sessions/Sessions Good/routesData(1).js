var express = require("express");
var passport = require("passport");
var path = require("path");

var User = require("./models/user");
var router = express.Router();

const myDatabase = require('./myDatabase');    //added
let db = new myDatabase();

const Data = require('./Data');


//function ensureAuthenticated(req, res, next) {
//  if (req.isAuthenticated()) {
//    next();
//  } else {
//    req.flash("info", "You must be logged in to see this page.");
//    res.redirect("/login");
//  }
//}

router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});


router.get("/updateInfo", function(req, res) {
  let name = req.query.name;
  let grade = parseInt(req.query.grade);
  if (req.isAuthenticated()) {
    let obj = new Data(name,grade);
    return(db.postData(obj,res));

  } else {
    res.json(null);
  }
});

router.get("/getInfo", function(req, res) {
  let name = req.query.name;
  if (req.isAuthenticated()) {
    return(db.getData(name,res));

  } else {
    res.json(null);
  }
});

/*
router.get("/update", function(req, res) {
    if (req.isAuthenticated()) {
          console.log("update grade is " + req.query.grade);
          res.json(null);
      } else {
          res.json(null);
      }
});
*/
/*
router.put('/update', function(req, res){

    if (req.isAuthenticated()) {

        if (req.body.name == "") {
            res.json(null);
            return;
        }
//added below for mongo
    let obj = new Student(req.user.ident,req.user.username,req.body.grade,req.body.volleyball,req.body.basketball,req.body.soccer);
        return(db.putStudent(obj,res));

    }
    else
        res.json(null);
});
*/


module.exports = router;
