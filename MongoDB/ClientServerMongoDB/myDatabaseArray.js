const Data = require('./Data');

let myDatabase = function() {
    this.data = [];
}

let dataIndex = 0;

myDatabase.prototype.displayData = function() {
    for (let i=0;i<this.data.length;i++) {
        console.log(this.data[i]);
    }
}

myDatabase.prototype.postData = function(_data,res) {
  for (let i=0;i<this.data.length;i++) {
    if (this.data[i] && this.data[i].ident == _data.ident) {
      return res.json({error:true});
//      return false;
    }
  }
  this.data[dataIndex++] =
  new Data(_data.ident,_data.name);
  return res.json({error:false});
}

myDatabase.prototype.getData = function(ident,res) {
  for (let i=0;i<this.data.length;i++) {
    if (this.data[i] && ident == this.data[i].ident)
    {
      return res.json({error:false,name:this.data[i].name});
      //return(new Data(this.data[i].ident,this.data[i].name));
    }
  }
  return res.json({error:true});
  //return null;
}

myDatabase.prototype.putData = function(_data,res) {
  for (let i=0;i<this.data.length;i++) {
    if (this.data[i] && this.data[i].ident == _data.ident) {
      this.data[i] =
      new Data(_data.ident,_data.name);
      return res.json({error:false});
    }
  }
  return res.json({error:true});
}

myDatabase.prototype.deleteData = function(ident,res) {
  for (let i=0;i<this.data.length;i++) {
    if (this.data[i] && ident == this.data[i].ident) {
        let tempPtr = this.data[i];
        this.data[i] = undefined;
        //return tempPtr;
        return res.json({error:false});
    }
  }
  return res.json({error:true});
}

module.exports = myDatabase;
