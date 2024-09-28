const add = function(a, b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
	return arr.reduce((acm,ele)=>{
    return acm + ele;
  },0);
};

const multiply = function(arr) {
  return arr.length==0?0:arr.reduce((acm,ele)=>{
    return acm * ele;
  },1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if(a==0||a==1) return 1;

  return a*factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
