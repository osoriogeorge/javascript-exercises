const leapYears = function (year) {
  if (year % 4 == 0 && year % 400 == 0) {
    console.log("year " + year + " is a Lap");
  } else if (year % 100 == 0) {
    console.log("year " + year + " is aLap");
  } else {
    console.log("year " + year + " is not a Lap");
  }
};
//console.log();
leapYears(2000);
leapYears(1985);

// Do not edit below this line
module.exports = leapYears;
