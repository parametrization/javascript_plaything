export function mergeSortDeclarative(arr) {
  if (arr.length < 2) return arr;

  let middle = Math.round(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  return merge(mergeSortDeclarative(left), mergeSortDeclarative(right));

}

function merge(left, right) {
  let result = [];

  while(left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

export function mergeSortIterative(list) {
  var newlist = [];
  for (thing in list) {

  }
}
