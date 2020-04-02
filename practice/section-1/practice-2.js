'use strict';

function collectSameElements(collectionA, collectionB) {
  var i;
  var result = [];

  for (i = 0; i < collectionA.length; i++) {
    if (collectionB[0].includes(collectionA[i])) {
      result.push(collectionA[i]);
    }
  }

  return result;
}
