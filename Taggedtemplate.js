function html(tpls, ...args) {
    let str = tpls[0];
    for (let i = 0; i < args.length; i++) {
        str += escape(args[i]) + tpls[i + 1];
    }
    return str;
}

function escape(raw) {
    return raw.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/'/g, "&apos;")  // Changed to &apos;
              .replace(/"/g, "&quot;");
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
