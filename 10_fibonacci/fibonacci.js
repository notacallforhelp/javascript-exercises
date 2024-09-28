const fibonacci = function(a) {
    a = Number(a);
    if(a<0)
    {
        return "OOPS";
    }
    let f = [0,1,1];
    for(let i=3;i<=a;i++)
    {
        let k = f[i-1]+f[i-2];
        f.push(k);
    }
    return f[a];
};

// Do not edit below this line
module.exports = fibonacci;
