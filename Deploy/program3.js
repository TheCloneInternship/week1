var inputs = process.argv.slice(2);
var result = inputs.map(b => b[0])
.reduce((boArd, b) => boArd + b);
console.log(`[${inputs}] becomes "${result}"`);