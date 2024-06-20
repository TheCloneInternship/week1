module.exports= function average(...args){
    var lengths =args.length;
    const sumNumber = args.reduce((acc, cur)=>acc+cur
    );
    return sumNumber/lengths;
}


