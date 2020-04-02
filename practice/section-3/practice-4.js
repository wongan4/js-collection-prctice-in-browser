'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var i;
  var result = [];
  var counts = {};

  collectionA.forEach(element => {
    if (element.includes("-")) {
      counts[element.split("-")[0]] = element.split("-")[1];
    }
    else {
      counts[element] = (counts[element] || 0) + 1;
    }
  });

  for (let key in counts) {
    if (objectB["value"].includes(key)) {
      result.push({"key": key, "count": (counts[key] - Math.floor(counts[key] / 3))});
    }
    else {
      result.push({"key": key, "count": counts[key]});
    }
  }

  return result;
}
