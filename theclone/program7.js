module.exports = function average(...args) {
    var total = 0;
    var denum = args.length;
    args.forEach(function (value) {
        total += value;
    });
    var result = total/denum;
    return result;
};

