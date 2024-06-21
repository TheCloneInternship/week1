let userArray = process.argv.slice(2);
let [ , username, email] = userArray;
let userDets = {username, email};
console.log(userDets);
