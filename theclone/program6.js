const numbers = process.argv.slice(2, process.argv.length);
var result = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${result}`);

