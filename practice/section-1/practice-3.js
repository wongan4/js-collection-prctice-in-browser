'use strict';

function collectSameElements(collectionA, objectB) {
  var i;
  var result = [];

  for (i = 0; i < collectionA.length; i++) {
    if (objectB["value"].includes(collectionA[i])) {
      result.push(collectionA[i]);
    }
  }

  return result;
}
