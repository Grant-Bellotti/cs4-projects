//Script to pick a random number from 1 to 10

//Require the seedrandom module
const seedrandom = require('seedrandom');

//Create a random number.
let rng = seedrandom();

let myRandomNumber = Math.floor(rng()*10+1);
console.log(myRandomNumber);

myRandomNumber = Math.floor(rng()*10+1);
console.log(myRandomNumber);

myRandomNumber = Math.floor(rng()*10+1);
console.log(myRandomNumber);
