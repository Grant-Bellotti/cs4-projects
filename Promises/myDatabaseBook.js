

var express = require("express");
var mongoose = require("mongoose");
var Book = require("./models/Book");
//const Student = require('./Student');

let myDatabaseBook = function() {
}

myDatabaseBook.prototype.getBooks = function(res) {
  Book.find({},function(error,book) {
      if (error) {
          return res.json({retVal:null});
      }
      else if (book == null) {
          return res.json({retVal:null});
      }

      if (book.length >= 0)    
      {
        console.log("book.length = " + book.length);
          return res.json({retVal:book});
      }
      else
          return res.json({retVal:null});
   });
}

myDatabaseBook.prototype.postBook = function(book,res) {
console.log("postBook " + book.ident + " " + book.title);
    Book.create(book,function(error,info) {
        if (error) {
            return res.json({retVal:false});
        }
        return res.json({retVal:true});
    });
}

module.exports = myDatabaseBook;