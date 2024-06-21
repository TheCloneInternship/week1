let user_array = process.argv.slice(2);
let user_object = {};
[, user_object.username, user_object.email] = user_array;
console.log(user_object);
