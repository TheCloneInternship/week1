var inputs = process.argv.splice(2);
var transfored_to = inputs.map((input) => input[0]).reduce((x, y) => x + y);
console.log(`[${inputs}] becomes "${transfored_to}"`);
