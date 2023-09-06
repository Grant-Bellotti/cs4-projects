var express = require("express");
var mongoose = require("mongoose");
var DataModel = require("./models/Data");
const Data = require('./Data');

let myDatabase = function() {
}



myDatabase.prototype.postData = function(data,res) {
  let obj = {ident:data.ident,name:data.name};
  DataModel.create(obj,function(error,info) {
      if (error) {
          return res.json({error:true});
      }
      return res.json({error:false});
  });
}

myDatabase.prototype.getData = function(ident,res) {

  DataModel.find({ident:ident},function(error,info) {
      if (error) {
          return res.json({error:true});
      }
      else if (info == null) {
          return res.json({error:true});
      }

      if (info.length == 1)
          return res.json({error:false,name:info[0].name});
      else
          return res.json({error:true});
   });
}



myDatabase.prototype.putData = function(data,res) {
  let obj = {ident:data.ident,name:data.name};
  DataModel.findOneAndUpdate({ident:data.ident},{name:data.name},function(error,oldData) {
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
