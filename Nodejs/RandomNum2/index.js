const randommine = require('./randomMine');

let obj1 = new randommine(100,150);
let obj2 = new randommine(20,40);

console.log("min = " + obj1.getMin()
            + " max = " + obj1.getMax()
            + " range " + obj1.getRange());
console.log("random value = " + obj1.getValue());
console.log("=============================")
console.log("min = " + obj2.getMin()
            + " max = " + obj2.getMax()
            + " range " + obj2.getRange());
console.log("random value = " + obj2.getValue());
