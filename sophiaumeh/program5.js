let userArray = process.argv.slice(2);
let [ , username, email] = userArray;
let userDet = {username, email};
console.log(userDet);
