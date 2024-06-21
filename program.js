function html(strings, ...values) {
    let result = '';

    // Iterate over the strings array
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            // Escape HTML-unsafe characters in values[i]
            result += escapeHTML(values[i]);
        }
    }

    return result;
}

// Helper function to escape HTML-unsafe characters
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function(match) {
        switch (match) {
            case '&': return '&amp;';
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&quot;';
            case "'": return '&apos;';
            default: return match;
        }
    });
}

// Example usage with command-line arguments
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
