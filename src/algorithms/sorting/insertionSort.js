export function insertionSortDeclarative(arr) {
  if (arr.length < 2) return arr;
  let result = [];
  let position = 0;

  for (let value of arr) {
    while ( result[position] < value) {
      position++;
    }
    result.splice(position, 0, value);
    position = 0;
  }
  return result;
}
