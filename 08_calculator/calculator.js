const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
	let sumNums = 0
  for (let i = 0; i < nums.length; i++){
    sumNums += nums[i]
  }
  return sumNums
};

const multiply = function(nums) {
  let product = 1
  for (let i = 0; i < nums.length; i++){
    product *= nums[i]
  }
  return product
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
	if (num === 0){
    return 1
  } else {
    let result = 1
    for (let i = num; i > 0; i--){
      result *= i
    }
    return result
  }
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
