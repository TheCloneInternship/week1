var inputs = process.argv.slice(2);
var result = inputs.map(word => word.substring(0, 1)).reduce((final_word, letter) => final_word + letter, "");

console.log(`[${inputs}] becomes "${result}"`);