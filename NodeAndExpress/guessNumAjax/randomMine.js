let myRandomNum = function(minVal,maxVal) {
    this.minValue = Number(minVal);
    this.maxValue = Number(maxVal);
    //OR
//    this.minValue = parseInt(minVal);
//    this.maxValue = parseInt(maxVal);
}

myRandomNum.prototype.setRange = function(minVal,maxVal) {
    this.minValue = Number(minVal);
    this.maxValue = Number(maxVal);
    //OR
//    this.minValue = parseInt(minVal);
//    this.maxValue = parseInt(maxVal);
}

myRandomNum.prototype.getMin = function() {
    return this.minValue;
}
myRandomNum.prototype.getMax = function() {
    return this.maxValue;
}

myRandomNum.prototype.getValue = function() {
    return (Math.floor((Math.random() * (this.maxValue+1-this.minValue) + this.minValue)));

}
myRandomNum.prototype.getValueMiddle = function() {

    return (Math.floor((this.maxValue-this.minValue)/2 + this.minValue));
}
myRandomNum.prototype.getRange = function() {
        return (this.maxValue+1-this.minValue);
}

module.exports = myRandomNum;
