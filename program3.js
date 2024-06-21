let details = process.argv.slice(2);

let shortForm = details.map((x) => x[0]).reduce((result, x) => result + x);

console.log(`[${details}] becomes "${shortForm}"`);
