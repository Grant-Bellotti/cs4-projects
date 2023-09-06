let myRandomNum = function(minVal,maxVal) {
    this.minValue = minVal;
    this.maxValue = maxVal;
}

myRandomNum.prototype.getValue = function() {
  let temp = Math.floor(Math.random() * this.getRange() + this.getMin());
	return (temp);
}
myRandomNum.prototype.setRange = function(minVal,maxVal) {
    this.minValue = minVal;
    this.maxValue = maxVal;
}
myRandomNum.prototype.getMin = function() {
    return this.minValue;
}
myRandomNum.prototype.getMax = function() {
    return this.maxValue;
}
myRandomNum.prototype.getRange = function() {
		return (this.getMax() - this.getMin() + 1);
}

module.exports = myRandomNum;
