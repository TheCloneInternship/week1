/*module.exports = function average(...args)
{var result = 0;
    args.forEach(function (value) {result += value;});
    return result;
};*/

module.exports = function average(...args) {
    
    let sum = args.reduce((acc, value) => acc + value, 0);
    return sum / args.length;
};

/*module.exports = (...args) => {
    var sum = args.reduce((soFar, value) => soFar + value, 0);
    return sum / args.length;
};*/