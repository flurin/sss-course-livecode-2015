console.log("Hello world!");

var myArray = [];

var fullArray = [1, "two", 3.0];

console.log("mA", myArray.length);
console.log("fA", fullArray.length);

console.log("element 2:", fullArray[1]);

fullArray.push("four");

console.log("fA", fullArray.length);
console.log(fullArray);

fullArray.pop();

console.log("fA", fullArray.length);
console.log(fullArray);
