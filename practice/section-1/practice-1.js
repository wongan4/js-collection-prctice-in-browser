'use strict';

function collectSameElements(collectionA, collectionB) {
  var i;
  var result = [];

  for (i = 0; i < collectionA.length; i++) {
    if (collectionB.includes(collectionA[i])) {
      result.push(collectionA[i]);
    }
  }

  return result;
}
