const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question("Pick a number.",(number1) => {
	console.log(`You chose ${number1}`); //those are tilde(`) characters.

	rl.question("Pick a second number.",(number2) => {

		const sum = parseInt(number1) + parseInt(number2);
		console.log(`${number1} + ${number2} = ${sum}`); //those are tilde(`) characters.

		rl.close();    //needed here to be correct.
	});

//	rl.close();     //this will show a async issue.
});
