const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
	for (let num of arr) {
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  for (let num of arr) {
    result *= num;
  }
  return result;
};

const power = function(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
      result *= a;
  }
  return result;
};

const factorial = function(n) {
	let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
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
