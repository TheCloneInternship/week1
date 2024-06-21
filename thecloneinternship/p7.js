module.exports = function(...args) {
    let sum = args.reduce((total, x) => total + x);
    return sum / args.length;
};
