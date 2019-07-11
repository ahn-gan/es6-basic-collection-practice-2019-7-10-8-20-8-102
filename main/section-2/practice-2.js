'use strict';

module.exports = function countSameElements(collection) {
    // 去重
    let uniqueCollection = collection.filter((element, index, self) => self.indexOf(element) === index); 
    let result = [];
    uniqueCollection.map(val => {
      let sameElements = collection.filter(item => item === val);
      let valObj = {
        key: val.indexOf('-') > -1 ? val.split('-')[0] : val,
        count: sameElements[0].indexOf('-') > -1 ? parseInt(sameElements[0].split('-')[1]) : sameElements.length
      };
      result.push(valObj);
    });
    return result;
}
