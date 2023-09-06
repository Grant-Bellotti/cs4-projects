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
  if (req.isAuthenticated()) {
    let name = req.user.username;
    let grade = parseInt(req.query.grade);
    let obj = new Data(name,grade);
    return(db.postData(obj,res));

  } else {
    res.json(null);
  }
});

router.get("/getInfo", function(req, res) {
  if (req.isAuthenticated()) {
    let name = req.user.username;
    return(db.getData(name,res));

  } else {
    res.json(null);
  }
});

module.exports = router;
