module.exports = function makeImportant(word, times = word.length){
  return word+'!'.repeat(times);
};
