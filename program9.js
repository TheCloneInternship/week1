module.exports = function makeImportant(text , emphasy = text.length ){
  let suffix = '!';
  return (text + suffix.repeat(emphasy));
}