module.exports = function makeImportant (str, len=str.length, excl=`!`.repeat(len) ) {
    return (`${str}${len > 0? excl: ''}`);
};