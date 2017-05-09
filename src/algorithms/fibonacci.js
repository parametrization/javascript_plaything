export function fibonacciDeclarative(num) {
  if (num === 1) return 1;
  if (num === 2) return 1;
  else return fibonacciDeclarative(num - 2) + fibonacciDeclarative(num - 1);
}

export function fibonacciImperative(num) {
  let result = 0;
  let first = 1;
  let second = 1;
  if (num === 1 || num === 2) return 1;
  for (let i = 3; num >= i; i++) {
     result = first + second;
     second = first;
     first = result;
  }
  return result;
}
