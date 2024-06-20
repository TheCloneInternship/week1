function replaceSymbols(input) {
  const replacements = {
    "'": "&apos;",
    '"': "&quot;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  };

  return input.replace(/['"&<>]/g, match => replacements[match]);
}
console.log(`<b>${process.argv[2]} says</b>: "${replaceSymbols(process.argv[3])}"`);
