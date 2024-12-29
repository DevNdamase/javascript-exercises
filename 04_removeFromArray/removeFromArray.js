const removeFromArray = function (array, ...itemsToRemove) {
  const modifiedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!itemsToRemove.includes(array[i])) {
      modifiedArray.push(array[i]);
    }
  }
  return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
