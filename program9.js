// Create a Node module that exports a function to make a string really important
module.exports = function makeImportant(str, num = str.length) {
    // Append num exclamation marks to the string using String.prototype.repeat
    return `${str}${'!'.repeat(num)}`;
};
