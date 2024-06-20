var numbers = process.argv.slice(2);

console.log(`The minimum of [${numbers}] is ${Math.min(...numbers)}`);
