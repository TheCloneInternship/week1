const numbers = process.argv.slice(2);
const min = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${min}`);
