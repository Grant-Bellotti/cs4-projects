var express = require("express");
var mongoose = require("mongoose");
var DataModel = require("./models/Data");
const Data = require('./Data');

let myDatabase = function() {
}



myDatabase.prototype.postData = function(data,res) {
//  let obj = {ident:data.ident,name:data.name};
  let obj = {name:data.name,grade:data.grade,opt1:data.opt1,opt2:data.opt2,opt3:data.opt3};   //added
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
          return res.json({error:false,name:info[0].name,grade:info[0].grade,opt1:info[0].opt1,opt2:info[0].opt2,opt3:info[0].opt3});
      else
          return res.json({error:true});
   });
}

myDatabase.prototype.putData = function(data,res) {
  DataModel.findOneAndUpdate({name:data.name},{grade:data.grade,opt1:data.opt1,opt2:data.opt2,opt3:data.opt3},function(error,oldData) {
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
    DataModel.remove({name:name},function(error,removed) {
        if (error) {
            return res.json({error:true});
        }
        if (removed.result.n == 0)
            return res.json({error:true});
        return res.json({error:false});
    });
}

module.exports = myDatabase;
