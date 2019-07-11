'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter( itemA => {
    return itemA == collectionB[0].filter(itemB => itemB == itemA)[0];
  })
}
