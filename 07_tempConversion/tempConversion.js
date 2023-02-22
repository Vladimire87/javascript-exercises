const convertToCelsius = function (temp) {
  // Example: (50°F - 32) x .5556 = 10°C
  let celsius = (temp - 32) * 0.5556;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  // Example: (30°C x 1.8) + 32 = 86°F’
  let fahrenheit = temp * 1.8 + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
