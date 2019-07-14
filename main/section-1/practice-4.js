'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let filterArray = collectionA.filter( itemA => {
    return itemA.key == objectB.value.filter(itemB => itemB == itemA.key)[0];
  });
  let result = filterArray.map(element => element.key);
  return result;
}
