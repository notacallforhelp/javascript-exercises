const sumAll = function(x,y) {
    if(x<0||y<0)
    {
        return 'ERROR';
    }
    else if(!Number.isInteger(x)||!Number.isInteger(y))
    {
        return 'ERROR';
    }
    if(x>y)
    {
        let temp = x;
        x=y;
        y=temp;
    }
    return ((y*(y+1))/2 - ((x-1)*x)/2);
};

// Do not edit below this line
module.exports = sumAll;
