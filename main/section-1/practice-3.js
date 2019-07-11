'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter( itemA => {
    return itemA == objectB.value.filter(itemB => itemB == itemA)[0];
  })
}
