module.exports = function average(...args) {
    let sum = args.reduce((acc, value) => acc + value, 0);
    return sum / args.length;
};