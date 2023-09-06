//Starting code=============================



function School() {
	this.student = [];
	this.index = 0;
  this.addStudent = function(student) {
		this.student[this.index] = student;
		this.index++;
  }
  this.gpaAbove = function(gpa) {
    console.log("Students with a gpa above " + gpa)
		for (let j of this.student) {
			if(j.gpa > gpa)
				console.log(j.name);
		}
  }

  this.moreCoursesThan = function(numCourses) {
    console.log("Students with more than " + numCourses + " courses")
		for (let j of this.student) {
			if(j.index > numCourses)
				console.log(j.name);
		}
  }
}


function Course(name,period) {
	this.name = name;
	this.period = period;
  this.getInfo = function() {
		return("Course " + this.name + " " + this.period);
  }
}

function Student(name,age,gpa) {
	this.name = name;
	this.age = age;
	this.gpa = gpa;
	this.course = [];
	this.index = 0;
  this.addCourse = function(course) {
		this.course[this.index] = course;
		this.index++;
  }
  this.getCourses = function() {
    let str = "";
		for (let j of this.course) {
        str += j.getInfo() + " ";
    }
    return str;
  }
	this.getInfo = function() {
		return("Student " + this.name + " " + this.age + " " + this.gpa + " " + this.getCourses());
  }
}

let theSchool = new School();

let biology = new Course("Biology",0);
let chemistry = new Course("Chemistry",0);
let usHistory = new Course("US_History",1);
let calculus = new Course("Calculus",1);
let spanish = new Course("Spanish",2);

let annieMay = new Student("Annie May",14,3.8);
annieMay.addCourse(biology);
annieMay.addCourse(calculus);

let tino = new Student("Tino",16,3.4);
tino.addCourse(chemistry);
tino.addCourse(calculus);

let bettySue = new Student("Betty Sue",17,3.1);
bettySue.addCourse(biology);
bettySue.addCourse(usHistory);
bettySue.addCourse(spanish);

theSchool.addStudent(annieMay);
theSchool.addStudent(tino);
theSchool.addStudent(bettySue);

console.log("==============");
theSchool.gpaAbove(3.2)
console.log("==============");
theSchool.moreCoursesThan(2)
console.log("================")
console.log(tino.getInfo())
