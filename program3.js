var inputs = process.argv.slice(2);
var result1 = inputs.map(inputs => inputs[0])
let result = result1.reduce( (total,num) => ( total + num) );

console.log (`[${process.argv.slice(2)}] becomes "${result}"`);
