let user_array = process.argv.slice(2);

let result = {};

[, result.username, result.email] = user_array;

console.log(result);
