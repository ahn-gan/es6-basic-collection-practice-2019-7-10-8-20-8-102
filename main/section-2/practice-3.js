'use strict';

module.exports = function countSameElements(collection) {
      let regExp = /[0-9]/;
      let normalCollection = collection.map(element => regExp.test(element) ? { name: element.substr(0, 1), summary: parseInt(element.replace(/[^0-9]/ig,'')) } : {name: element, summary: 1});
      let elementMap = new Map();

      normalCollection.map(element => {
        let count = (elementMap.get(element.name) === undefined) ? element.summary : elementMap.get(element.name) + element.summary;
        elementMap.set(element.name, count);
      });
      let result = [];
      elementMap.forEach((value, key) => {
        let item = {
          name: key,
          summary: value
        };
        result.push(item);
      });
      return result;
}