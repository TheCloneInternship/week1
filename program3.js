var inputs= process.argv.slice(2);
var result= inputs.map(str => str[0])
.reduce((acc, current) => acc + current);
console.log(`[${inputs}] becomes "${result}"`);
