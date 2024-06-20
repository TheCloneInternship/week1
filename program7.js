module.exports = function average(...numbers) {
    var sum = numbers.reduce((add,num) => add+num,0);
    return (sum/numbers.length);
     };
