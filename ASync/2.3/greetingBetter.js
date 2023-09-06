//Need to have the file message.txt
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let lastGreeting = 'None';
fs.stat('message.txt',(err,stats)=>{
	if (typeof stats != 'undefined') {
		fs.readFile('message.txt',(err,data)=>{
			if (err)
				throw err;
			lastGreeting = data;

			console.log(`My last greeting was to ${lastGreeting}`);

			rl.question("What's your name?",(answer) => {
				console.log(`Well hello there ${answer}`);

				fs.writeFile('message.txt',answer,(err)=>{
					if (err)
						throw err;
					rl.close();
				});
			});
		});
	}
});
