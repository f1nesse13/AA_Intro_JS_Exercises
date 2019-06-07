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

Array.prototype.bubbleSort = function () {
  var sorted = true
  for (let i = 1; i < this.length; i++) {
    var currentNum = this[i]
    var prevNum = this[i-1]
    if (prevNum > currentNum) {
      this[i] = prevNum
      this[i-1] = currentNum
      sorted = false
    }
  }

  if (!sorted) {
    return this.bubbleSort();
  } else {
    return this;
  }
}

var substrings = function (string) {
  var subs = [];

  string.split("").forEach(function (letter, i) {
    for (j = i + 1; j <= string.length; j++) {
      subs.push(string.slice(i, j));
    }
  });

  return subs;
};
