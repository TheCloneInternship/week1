console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    function html(strings, ...expressions) {
        var result = expressions.map(word => word.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;'));
        return result.reduce((acc, exp, idx) => {return acc + exp + strings[idx+1];}, strings[0])
    }
