module.exports = function makeImportant(greeting, number=greeting.length) {
    return `${greeting}${"!".repeat(number)}`
}