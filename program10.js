console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    function html(strings, ...values) {
        const escHtml = (str) =>
            str
               .replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/"/g, "&quot;")
               .replace(/'/g, "&apos;");
               
            let result = "";

               for(let u = 0; u < strings.length; u++)
                {
                    result += strings[u];

                   if(u < values.length)
                    {
                        result += escHtml(String(values[u]));
                    }
               }
         return result; 
    };
    