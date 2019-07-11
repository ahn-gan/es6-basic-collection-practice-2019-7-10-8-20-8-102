'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = [];
  let filterArray = collectionA.filter( itemA => {
    return itemA.key == objectB.value.filter(itemB => itemB == itemA.key)[0];
  });
  filterArray.map(element => {
    result.push(element.key);
  });
  return result;
}
