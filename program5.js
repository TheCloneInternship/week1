
let userArray = process.argv.slice(2);
const newUser ={
    username: userArray[1],
    email: userArray[2]
}
console.log(newUser);