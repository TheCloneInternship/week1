let info = {};
let userArray = process.argv.slice(2);
[,info.username, info.email] = userArray;
console.log(info);
