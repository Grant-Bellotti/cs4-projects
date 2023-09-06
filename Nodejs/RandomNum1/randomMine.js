let minValue = 10;
let maxValue = 20;
exports.getValue = function() {
  let temp = Math.floor(Math.random() * this.getRange() + this.getMin());
	return (temp);
}
exports.setRange = function(minVal,maxVal) {
		minValue = minVal;
		maxValue = maxVal;
}
exports.getMin = function() {
		return (minValue);
}
exports.getMax = function() {
		return (maxValue);
}
exports.getRange = function() {
		return (maxValue-minValue+1);
}
