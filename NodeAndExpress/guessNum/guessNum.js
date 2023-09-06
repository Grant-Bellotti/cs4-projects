const randommine = require('./randomMine');
let computerNum = 10;
let numTries;
let obj;

exports.storeNum = function(minValue,maxValue) {
    obj = new randommine(minValue,maxValue);
    numTries = 0;
    computerNum = obj.getValue();
    console.log(computerNum);
    console.log("choose a number from " + minValue + " to " + maxValue)
}

exports.guessNum = function(guess) {
    numTries++;
    if (guess > computerNum)   //choose smaller
    {
        return (-1);
    }
    else if (guess < computerNum)   //choose bigger
    {
        return (1);
    }
    else   //number is correct
    {
        return (0);
    }
}
exports.getNumTries = function() {
    return numTries;
}
exports.getObj = function() {
    return obj;
}
