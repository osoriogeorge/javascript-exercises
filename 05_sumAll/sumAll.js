const sumAll = function (n1, n2) {
  let suma = 0;
  for (let i = n1; i <= n2; i++) {
    suma += i;
  }
  return suma;
};
console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
