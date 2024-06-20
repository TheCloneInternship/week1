console.log(html`<b>${process.argv.slice(2)} says</b>: "${process.argv.slice(3)}"`);

    function html(strings, ...values) {
        const escHtml = (str) =>
            str
               .replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/"/g, "&quot;")
               .replace(/'/g, "&apos;");
               
            let result = "";

               for(let u = 0; u < strings.lenght; u++)
                {
                    result += strings[u];

                   if(u < values.length)
                    {
                        result += escHtml(String(values[x]));
                    }
               }
         return result; 
    }
    