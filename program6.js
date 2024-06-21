// Step 1: Get the command-line arguments starting from index 2
let numbers = process.argv.slice(2);

// Step 2: Convert string arguments to numbers
// numbers = numbers.map(Number);

// Step 3: Use the spread operator to find the minimum value
const minNumber = Math.min(...numbers);

// Step 4: Log the list of numbers and the minimum value
console.log(`The minimum of [${numbers}] is ${minNumber}`);
