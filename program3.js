let inputs = process.argv.slice(2);
let result = inputs.map( input => input = input[0]).reduce((inp, curr) => inp + curr);

console.log(`[${inputs}] becomes "${result}"`);