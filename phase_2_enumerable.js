Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i])
  }
}

Array.prototype.myMap = function (callback) {
  var newArray = [];
  
  this.myEach(function (ele) {
    newArray.push(callback(ele))
  });
  
  return newArray;
}

Array.prototype.myReduce = function (callback) {
  accumulator = this[0];

  this.slice(1).myEach(function (ele) {
    accumulator = callback(accumulator, ele)
  });
  return accumulator;
}


