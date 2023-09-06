const Genre = {
	MYSTERY:0,SCIFI:1,NONFICTION:2,FANTASY:3,TRAVEL:4
}
let testLibrary = new Library();
//MYSTERY:0,SCIFI:1,NONFICTION:2,FANTASY:3,TRAVEL:4
let book1 = new Book("awesome sauce", 27, 10,Genre.NONFICTION);
let book2 = new Book("lame sauce", 483, 0.1, Genre.TRAVEL);
let book3 = new Book("Percy Jackson", 253, 8.1, Genre.FANTASY);

let address1 = new Address("1256", "Grandview Rd", "Vista");
let address2 = new Address("535", "Golf Glen Dr", "San Marcos");

let person1 = new Person("Jade", 18, "Female", address1);
let person2 = new Person("Eric", 27, "Male", address2);

testLibrary.addBook(book1);
testLibrary.addBook(book2);
testLibrary.addBook(book3);

book1.borrow(person1);
book2.borrow(person2);


console.log(book1.getInfo());
console.log("--------------------------------------------");
console.log(book2.getInfo());
console.log("--------------------------------------------");
console.log(book3.getInfo());
//console.log(testLibrary.ratedAbove(5.0));

function Library() {
	this.book = [];
	this.index = 0;

	this.addBook = function(book) {
		this.book[this.index] = book;
		this.index++;
	}
	this.printBook = function() {
		for (let i=0; i<this.index; i++)
			console.log(this.book[i]);
	}
	this.ratedAbove = function(rating) {
		for (let j of this.book) {
			if(j.rating > rating)
				console.log(j.title);
		}
		/*
		for (let i=0; i<this.index; i++) {
			if(this.book[i].rating > rating)
				console.log(this.book[i].title);
		}
		*/
	}
}

function Person(name, age, gender, address) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.address = address;
	this.getInfo = function() {
		return("Name: " + this.name + " | Age: " + this.age + " | Gender: " + this.gender + " | Address: " + this.address.getInfo());
	}
}

function Address(number,street,city) {
	this.number = number;
	this.street = street;
	this.city = city;
	this.getInfo = function() {
		return("Address: " + this.number + " " + this.street + " " + this.city);
	}
}

function Book(title, pages, rating, genre, checkedOut=null) {
	this.title = title;
	this.pages = pages;
	this.rating = rating;
	this.genre = genre;
	this.checkedOut = checkedOut;
	this.borrow = function(person) {
		this.checkedOut = person;
	}
	this.unborrow = function() {
		this.checkedOut = null;
	}
	this.getInfo = function() {
		if(this.checkedOut) {
			return("Book: " + this.title + " | Person: " + this.checkedOut.getInfo());
		}
		else {
			return("Book " + this.title + " is not checked out")
		}
	}
}
/*
let myNum = new mathFunc(3,12);
console.log(myNum.num1);
//console.log(myNum.addReturn());
myNum.addPrint();


function mathFunc(num1, num2) {
	this.num1 = num1;
	this.num2 = num2;
	this.addReturn = function() {
		return(this.num1 + this.num2);
	}
	this.addPrint = function() {
		console.log(this.num1 + this.num2);
	}
}
*/
/*
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
*/
