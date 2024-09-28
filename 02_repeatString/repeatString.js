const repeatString = function( s, n) {
    let k = "";
    if(n<0)
    {
        return 'ERROR';
    }
    for(i=0;i<n;i++)
    {
        k +=s;
    }
    return k;
};

// Do not edit below this line
module.exports = repeatString;
