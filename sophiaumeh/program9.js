/*module.exports =
(string, bangs = string.length) => string + "!".repeat(bangs);*/

module.exports = (strg, noExcl) => {
    if (noExcl === undefined) {
        noExcl = strg.length;
    }
    return strg + '!'.repeat(noExcl);
};

