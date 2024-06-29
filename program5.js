let userArray = process.argv.slice(2);
let userLogin = {}; [,userLogin.username, userLogin.email] = userArray;
console.log(userLogin)