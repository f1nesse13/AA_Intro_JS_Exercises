function range(start, end) {
  var array = [start]

  if (start > end) {
    return [];
  } else if (start === end) {
    return array
  } else {
    return array.concat(range(start + 1, end));
  }
};

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  result = arr[0];
  return (result + sumRec(arr.slice(1, arr.length)))
}

function exponent(base, exp) {
  if (exp === 0 ){
    return 1;
  }
  return (base * fancyExponents(base, exp-1));
}

function fibonacci(number) {
  if (number <= 0){
    return [];
  }
  else if (number === 1){
    return [0];
  }
  else if (number === 2){
    return [0,1];
  }
  else{
    previousSequence = fibonacci(number - 1);
    new_num = previousSequence[previousSequence.length - 1] + previousSequence[previousSequence.length - 2];
    return previousSequence.concat(new_num);
  }
}

function bsearch(array, target) {
  if (array.length === 0){
    return null;
  }

  var midpoint = Math.floor(array.length / 2);
  var mid = array[midpoint];
  var left = array.slice(0, midpoint);
  var right = array.slice(midpoint + 1, array.length);

  if (target === mid) {
    return midpoint;
  }
  else if (target < mid) {
    return bsearch(left, target);
  }
  else if (target > mid) {
    subAnswer = bsearch(right, target);
    if (subAnswer === null){
      return nil;
    }
    else{
      return (midpoint + 1 + subAnswer);
    }
  }
}

Array.prototype.mergeSort = function(comparator) {
  if (this.length <= 1){
    return this;
  }
  var left = this.slice(0,Math.floor(this.length/2));
  var right = this.slice(Math.floor(this.length/2), this.length);
  return merge(left.mergeSort(comparator), right.mergeSort(comparator), comparator);
}

function subsets(array) {
  if (array.length <= 0) {
    return [[]];
  }
  var last = array.slice(array.length - 1, array.length);
  var subs = subsets(array.slice(0, array.length - 1));

  var newArray = [];
  for (var i = 0; i < subs.length; i++) {
    newArray.push(subs[i].concat(last));
  }

  subs = subs.concat(newArray);
  return subs;
}
