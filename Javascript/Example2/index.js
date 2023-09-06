let num = 5;
num = 2;
console.log(num);
const newVal = 4;  //value cant change *const is same as final in java*
console.log(newVal);

let val = 6;
stuff();
function stuff() {
  {
    let value = 7;        //var allows variable to be known outside of the scope
    console.log(value);
  }
  //console.log(value);
}

let word = "4";
let isItTrue = false;
let num2 = 4;
let val2 = 3.25;

console.log(typeof word);
console.log(typeof isItTrue);
console.log(typeof num2);
console.log(typeof val2);

if (typeof word == "string")
  console.log("word is a string");

if (word == num2)
  console.log("word is the same as num2");

if(word === num2) //checks the value and the type
  console.log("word is really the same as num2");

let stringNum = "23";
let num3 = parseInt(stringNum) + 3; //way to convert a string to num
console.log(num3);
let num4 = Number(stringNum); //anotherway
console.log(typeof num4);
