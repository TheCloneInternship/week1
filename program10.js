function html(strings, ...values) {
    let result = strings[0];
    for (let i = 0; i < values.length; ++i) {
        result += specChar(values[i]) + strings[i +1];
    }
    return result;
}

//Function for the html special character.
function specChar(s) {
    return s.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

