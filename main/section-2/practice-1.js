'use strict';

module.exports = function countSameElements(collection) {
  // 去重
  let uniqueCollection = collection.filter((element, index, self) => self.indexOf(element) === index); 
  let result = [];
  uniqueCollection.map(val => {
    let sameElements = collection.filter(item => item === val);
    let valObj = {
      key: val,
      count: sameElements.length
    };
    result.push(valObj);
  });
  return result;
}
