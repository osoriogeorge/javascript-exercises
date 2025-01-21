const convertToCelsius = function (fahrenheit) {
  let fahrenheitDegrees = Math.round(((fahrenheit - 32) * 5) / 9);

  console.log("Fahrenheit degrees is " + fahrenheitDegrees);
  return fahrenheitDegrees;
};
convertToCelsius(32);

const convertToFahrenheit = function (celsius) {
  let celsiusDegrees = Math.round(1.8 * celsius + 32);

  console.log("Celsius degrees is " + celsiusDegrees);
  return celsiusDegrees;
};
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
