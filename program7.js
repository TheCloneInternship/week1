module.exports = (...args) => {
    let sum = args.reduce((val, curr) => {
        val+curr;
    }, 0);

    return sum / args.length;
}