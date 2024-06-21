
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
    function html(pieces, ...substitution) {
        var result = pieces[0];
        for (var a = 0; a < substitution.length; ++a) {
            result += escape(substitution[a]) + pieces[a + 1];
        }

        return result;
    }
    function escape(s) {
        return s.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/'/g, "&apos;")
                .replace(/"/g, "&quot;");
    }