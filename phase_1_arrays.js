Array.prototype.uniq = function () {
  returnArray = [];
  this.forEach(ele => {
    if (!returnArray.includes(ele)) {
      returnArray.push(ele)
    }
  });
  return returnArray;
}

Array.prototype.twoSum = function () {
  let sums = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sums.push([i, j]);
      }
    }
  }
  return sums;
}

Array.prototype.transpose = function () {
  var newArray = [];

  for (i = 0; i < this.length; i++) {
    var newRow = [];
    for (j = 0; j < this.length; j++) {
      newRow.push(this[j][i]);
    }
    if (newRow[0] != undefined){
    newArray.push(newRow);
    }
  }

  return newArray;
}