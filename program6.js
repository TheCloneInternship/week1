
let number = process.argv.slice(2);

const findValue = ()=>{
    
    return Math.min(...number);
}
console.log(`The minimum of [${number}] is ${findValue()}`);