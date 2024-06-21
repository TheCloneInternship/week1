// Extract the arguments starting from the third one
let userArray = process.argv.slice(2);

// Destructure the array to extract username and email
let [, username, email] = userArray;

// Create an object with the extracted values
let userInfo = {
    username: username,
    email: email
};

// Log the object to the console
console.log(userInfo);
