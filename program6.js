// spread
const workings = process.argv.slice(2);
const numbers = workings.map(Number);
const min = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${min}`);


