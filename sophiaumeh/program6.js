
/*var numbers = process.argv[2]
var min = Math.min(...numbers);
console.log(`"The minimum of" [${numbers}] is ${min}`);*/

var numbers = process.argv.slice(2); //slice extracts elements into a new array without changing it
var minim = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${minim}`);