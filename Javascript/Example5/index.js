let list1 = new Array(3,8,1);
let list2 = Array(13,18,11);
let list3 = [23,28,21];
let list4 = [];
list4[0] = 33;
list4[1] = 38;
list4[2] = 31;
list1[9] = 5;
console.log("==============");
for (let i=0;i<list1.length;i++)
	console.log(list1[i])
console.log("==============");
for (let j of list4) //j will take on each value of list4
	console.log(j)
console.log("==============");
let list5 = [3,false,"stuff",4.6]
for (let j of list5)
	console.log(j)
