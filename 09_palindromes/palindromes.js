const palindromes = function (text) {
  const invertedText = text.split("").reverse().join("");
  if (text === invertedText) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
