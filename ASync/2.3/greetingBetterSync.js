//Need to have the file message.txt
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let lastGreeting = 'None';
let stats = fs.statSync('message.txt');
if (typeof stats != 'undefined') {
	lastGreeting = fs.readFileSync('message.txt');
	console.log(`My last greeting was to ${lastGreeting}`);

	rl.question("What's your name?",(answer) => {
		console.log(`Well hello there ${answer}`);
		fs.writeFileSync('message.txt',answer);
		rl.close();
	});
}
