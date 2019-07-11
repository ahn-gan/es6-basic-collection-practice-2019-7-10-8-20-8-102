'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {

  return collectionA.filter( itemA => {
    return itemA == collectionB.filter(itemB => itemB == itemA)[0];
  })
}
