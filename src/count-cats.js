module.exports = function countCats(matrix) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  let cats = '^^',
      catsCounter = 0,
      flattened = [];
  if(matrix.length) { 
    flattened = matrix.reduce(function(a, b) { // do array from array of arrays
      return a.concat(b);
    })
  } else {
    return 0;
  }
  flattened.forEach(elem => { // search cats
    if (elem === cats) {
      catsCounter += 1;
    }
  });
  return catsCounter;
};
