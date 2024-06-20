module.exports = function average(...numbers) {
  let sum = numbers.reduce((x, y) => x + y);

  return sum / numbers.length;
};
