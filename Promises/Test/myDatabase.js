var express = require("express");
var mongoose = require("mongoose");
var DataModel = require("./models/Data");
const Data = require('./Data');

//add or modify.  Code added for you.
var Promise = require('promise');

let myDatabase = function() {
}


//add or modify.  Add the needed Promise code below.
myDatabase.prototype.validUpdate = function(grade) {
//add or modify.  Uncomment below line of code.
  return new Promise(function(resolve,reject) {

      DataModel.find({},function(err,user) {
        if (err) {
          //return (false);
          reject(err);
        }
        else {
          for (let i=0;i<user.length;i++) {
            if (grade == user[i].grade) {
              //return (false);
              resolve(false);
            }
          }
          resolve(true);
          //return (true);
        }
      });

//add or modify.  Uncomment below line of code.
  });
//add or modify.  Comment the below line of code.
  //return (false);
}


myDatabase.prototype.postData = function(data,res) {
//  let obj = {ident:data.ident,name:data.name};
  let obj = {name:data.name,grade:data.grade};   //added
  DataModel.create(obj,function(error,info) {
      if (error) {
          return res.json({error:true});
      }
      return res.json({error:false});
  });
}

myDatabase.prototype.getData = function(name,res) {

  DataModel.find({name:name},function(error,info) {
      if (error) {
          return res.json({error:true});
      }
      else if (info == null) {
          return res.json({error:true});
      }
      if (info.length == 1)
          return res.json({error:false,name:name,grade:info[0].grade});
      else
          return res.json({error:true});
   });
}



myDatabase.prototype.putData = function(data,res) {
//  let obj = {ident:data.ident,name:data.name};
  let obj = {name:data.name,grade:data.grade};   //added
  DataModel.findOneAndUpdate({name:data.name},{grade:data.grade},function(error,oldData) {
    if (error) {
      return res.json({error:true});
    }
    else if (oldData == null) {
      return res.json({error:true});
    }
    return res.json({error:false});
  });
}

myDatabase.prototype.deleteData = function(ident,res) {
    DataModel.remove({ident:ident},function(error,removed) {
        if (error) {
            return res.json({error:true});
        }
        if (removed.result.n == 0)
            return res.json({error:true});
        return res.json({error:false});
    });
}

module.exports = myDatabase;
