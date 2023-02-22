const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  }

  let sum = 0;
  let number1 = num1;
  let number2 = num2;

  if (num1 > num2) {
    number1 = num2;
    number2 = num1;
  }
  for (let i = number1; i <= number1 + number2 - 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
