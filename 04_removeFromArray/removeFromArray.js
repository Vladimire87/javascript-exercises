const removeFromArray = function (arr, ...theArgs) {
  let newArr = arr;
  let delValue = theArgs;
  let filteredArray = newArr.filter((element) => !delValue.includes(element));
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
