const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function(n, e) {
	let res = 1;
  for (let i = 1; i <= e; i++) {
    res *= n;
  }
  return res;
};

const factorial = function(n) {
	let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
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
