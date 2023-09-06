const randommine = require('./randomMine');
let computerNum = 10;
let numTries;
let difference;
let obj;

exports.storeNum = function(minValue,maxValue) {
  obj = new randommine(minValue,maxValue);
  computerNum = obj.getValue();
  difference = this.getDifference();
  numTries = 0;
  console.log("computer number: " + computerNum + "\n" + "Difference: " + difference + "\n");
}

exports.guessNum = function(guess) {
  numTries++;
  if(guess < (computerNum-difference)) {
    console.log("Choose a much larger number");
    return (-2);
  }
  else if(guess < computerNum) {
    console.log("Choose a larger number");
    return (-1);
  }
  else if(guess > (computerNum+difference)) {
    console.log("Choose a much smaller number");
    return (2);
  }
  else if(guess > computerNum) {
    console.log("Choose a smaller number");
    return (1);
  }
  else {
    console.log("congratulations!!");
  }
}

exports.getNumTries = function() {
  return numTries;
}
exports.getDifference = function() {
  return ((obj.getRange()-1)/4);
}
