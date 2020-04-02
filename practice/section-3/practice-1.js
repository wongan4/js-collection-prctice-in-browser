'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var i;
  var result = [];

  for (i = 0; i < collectionA.length; i++) {
    if (objectB["value"].includes(collectionA[i]["key"])) {
      collectionA[i]["count"]--;
      result.push(collectionA[i]);
    }
    else {
      result.push(collectionA[i]);
    }
  }

  return result;
}
