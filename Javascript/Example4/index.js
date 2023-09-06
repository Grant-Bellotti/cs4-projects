stuff();
function stuff() {
	let val = 3;
	console.log("in stuff val = " + val)
}

console.log(stuff2());

function stuff2() {
	let val = 3;
	return(val+4)
}

let value = 3.5;
stuff3(4,value)

function stuff3(val1,val2) {
	console.log(val1 + val2);
}


let globalVal = 8;
stuff4(4);

function stuff4() {  //doesnt care if dont store a varaible you pass in
	console.log(globalVal + 11)
}


/////////////////////
console.log("==============");



let funcPtr = function (value) { //like a normal function, name is funcPtr
	console.log("anonymous function " + value)
}
let funcPtr2 = funcPtr;

funcPtr(7);
funcPtr(true);
funcPtr2(34.1);
funcPtr2("hi");


/////////////////////
console.log("==============");

moreStuff(5,function(num){console.log(num+4)}) //function in parameter

function moreStuff(val,func) {
	func(val*3)
}

test(4,function(num){return num+2},function(func,num1,num2){return func(num1)+num2});

function test(val, func1, func2) {
	console.log("test"+func2(func1,val,2));
}


/////////////////////
console.log("==============");

callIt = function(){
	console.log("in callIt");
}
moreStuff2(callIt)

function moreStuff2(func) {
	func()
}
