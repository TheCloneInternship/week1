let numbers = process.argv.slice(2);
let min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);