// Rest

module.exports = (...args) => {
  var sum = args.reduce((result, value) => result + value, 0);
  return sum / args.length;
};
