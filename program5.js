//destructuring

let userArray = process.argv.slice(2);
let result = {};

[, result.username, result.email] = userArray;

console.log(result);
