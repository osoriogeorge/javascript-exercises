const convertToCelsius = function (celsius) {
  let celsiusDegrees = Math.round(((celsius - 32) * 5) / 9);

  console.log("Celsius degrees is " + celsiusDegrees);
  return celsiusDegrees;
};
convertToCelsius(32);

const convertToFahrenheit = function (fahrenheit) {
  let fahrenheitDegrees = Math.round(1.8 * fahrenheit + 32);

  console.log("Fahrenheit degrees is " + fahrenheitDegrees);
  return fahrenheitDegrees;
};
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
