exports.min = function min(array) {
  if (array !== undefined && array !== null && array.length > 0) {
    array.sort((a, b) => a - b);
    let minimal = array[0];
    return minimal;
  }
  else {
    return 0;
  }
}

exports.max = function max(array) {
  if (array !== undefined && array !== null && array.length > 0) {
    array.sort((a, b) => a - b);
    let maximal = array[array.length - 1];
    return maximal;
  }
  else {
    return 0;
  }
}

exports.avg = function avg(array) {
  if (array !== undefined && array !== null && array.length > 0) {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
      average = sum / array.length;
    }
    return average;
  }
  else {
    return 0;
  }
}
