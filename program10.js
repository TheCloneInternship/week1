console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(strings, ...values) {
  const escapeHTML = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  let result = "";
  for (let x = 0; x < strings.length; x++) {
    result += strings[x];
    if (x < values.length) {
      result += escapeHTML(String(values[x]));
    }
  }

  return result;
}
