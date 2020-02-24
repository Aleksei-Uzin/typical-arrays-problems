
exports.min = function min (array) {
  array.sort(function (a, b) {
    if (typeof a === "number" && typeof b === "number")
      return a - b;
    else
      return 0;
  });
    return array[0];
}

exports.max = function max (array) {
  array.sort(function (a, b) {
    if (typeof a === "number" && typeof b === "number")
      return a - b;
    else
      return 0;
  });
  return array.pop();
}

exports.avg = function avg (array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return ((sum / array.length) || 0);
}
