let obj1 = new Object();

obj1.name = "Fred";
obj1.age = 34;
console.log(obj1)

obj1.isMale = true;
obj1.weight = 145.8;
console.log(obj1)

let obj2 = {name:'Annie',age:17,isMale:false,gradeLevel:12};
console.log(obj2)
console.log(obj2.name);
console.log(obj2["age"]);
console.log(obj2.age);


/////////////////////
console.log("==============");

let obj3 = {name:"Rover",address:{country:"USA",state:"CA",city:"Vista"},age:7}
let obj4 = obj3;
console.log(obj3)
console.log(obj4.address.state)

/////////////////////
console.log("==============");

function Car(make,model,year) {
	this.make = make;
	this.model = model;
	this.year = year;
}
let myCar = new Car("Mini","Cooper",2016);
console.log(myCar)
let yourCar = new Car("Tesla","Roadster",2020);
console.log(yourCar)

console.log(yourCar.model)
console.log(yourCar["model"])
console.log("==============");
let carPtr = myCar;
console.log(carPtr);
carPtr.newVal1 = 8;
carPtr.newVal2 = {val1:false,val2:"hello"};
console.log(carPtr);
console.log(carPtr.newVal2.val1);


/////////////////////
console.log("==============");
for (let i in yourCar) {       //gets different names
	console.log(i);
	console.log(yourCar[i]);
}
