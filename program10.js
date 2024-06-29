function html(input,...variable){
  let result = input[0];
  let n;    let filtered;     let c;
  for (n in variable){
    filtered = filter(variable[n]);
    result += filtered;
    c = Number(n)+1;
    result += input[c];
  };
  return  result
};

function filter(str){
  let filter = str.replace(/&/g,'&amp;');
    filter = filter.replace(/'/g,'&apos;');
    filter = filter.replace(/"/g,'&quot;');
    filter = filter.replace(/</g,'&lt;');
    filter = filter.replace(/>/g,'&gt;');
  return filter
};

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);