//link to arrow function description.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//or
//good example below
//https://medium.com/tfogo/advantages-and-pitfalls-of-arrow-functions-a16f0835799e

setTimeout(function(){
	console.log("Done");
},1000);   // function will be called after 1 second.
setTimeout(() => {
	console.log("Done from Arrow function");
},2000);   // function will be called after 2 second.

setTimeout(() => {
//string interpolation.
	const a = "a";
	const c = "c";
	console.log(`${a} b ${c}`);   // those are tilde character.
},3000);   // function will be called after 3 second.
