const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  let stringS = "";
  for (let i = 0; i < num; i++) {
    stringS += string;
  }
  return stringS;
};

// Do not edit below this line
module.exports = repeatString;
