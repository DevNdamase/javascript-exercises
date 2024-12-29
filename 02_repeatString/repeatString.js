const repeatString = function (str, repeations) {
  if (repeations < 0) {
    return 'ERROR';
  }
  let repeatedString = '';
  for (let i = 0; i < repeations; i++) {
    repeatedString += str;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
