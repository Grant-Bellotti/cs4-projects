var express = require("express");
var passport = require("passport");
var path = require("path");

var userData = require("./models/userData");
var router = express.Router();

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

router.post("/changeInfo", function(req, res) {
  if (req.isAuthenticated()) {
    var name = req.body.name;
    var grade = parseInt(req.body.grade);
    var opt1 = req.body.opt1;
    var opt2 = req.body.opt2;
    var opt3 = req.body.opt3;
    console.log("==================================================newwww" + name + grade + opt1 + opt2 + opt3);

    var newUser = userData.create({
      name: name,
      grade: grade,
      opt1: opt1,
      opt2: opt2,
      opt3: opt3
    });

    return;
  }
  res.json(null);
});

router.get("/getInfo", function(req, res) {
  var name = parseInt(req.body.name);
  if (req.isAuthenticated()) {
    userData.findOne({ name: name }, function(err, user) {
      console.log(user)
    });
  }
});

module.exports = router;
