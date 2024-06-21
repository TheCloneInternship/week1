let userArray = process.argv.slice(2);
let newUser = {};
[, newUser.username, newUser.email] = userArray;

console.log(`{ username: '${newUser.username}', email: '${newUser.email}' }`);