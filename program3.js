const input = process.argv.slice(2);
const result = input.map(words => words[0]).reduce((x,y) => x+y);
console.log(`[${input}] becomes "${result}"`);
