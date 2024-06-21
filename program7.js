// Create a Node module that exports an average function
module.exports = function average(...args) {
    // Calculate the sum of all arguments
    const sum = args.reduce((total, num) => total + num, 0);
    
    // Calculate the average
    const avg = sum / args.length;
    
    // Return the average
    return avg;
};
