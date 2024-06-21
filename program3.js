var inputs = process.argv.slice(2);
var result = inputs.map( s => s[0]).reduce((acc, char) => acc + char, '');
console.log(`[${inputs}] becomes "${result}"`);