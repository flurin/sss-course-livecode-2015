// ...

var version = require('./version.js');
var car = require('./object_function.js');

console.log(version);

console.log("-------");

console.log("S", car.speed);

car.accelerate(100);

console.log("S", car.speed);

car.accelerate(50);

console.log("S", car.speed);

car.accelerate(-500);

console.log("S", car.speed);
