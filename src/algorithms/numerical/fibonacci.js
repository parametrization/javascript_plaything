export function fibonacciDeclarative(num) {
  if (num === 1) return 1;
  if (num === 2) return 1;
  else return fibonacciDeclarative(num - 2) + fibonacciDeclarative(num - 1);
}

export function fibonacciImperative(num) {
  // 1 1 2 3 5
  // 1 2 3 4 5
  let result = 0;
  let first = 1;
  let second = 1;
  if (num === 1 || num === 2) return 1;
  for (let i = 3; num >= i; i++) {
     result = first + second;
     // 2 = 1 + 1
     second = first;
     first = result;
  }
  return result;
}

export function fibonacciDeclarativeMemoized(num) {

  let memo = [0,1,1];

  function f(n) {
    var value;
    var valueFirst;
    var valueSecond;

    if (n in memo) {
      value = memo[n];
      console.log("cached value found: " + value);
    } else {
      console.log("value not in memo.");
      if (n === 1 || n === 2) {
        return 1;
      } else {
        valueFirst = fibonacciDeclarative(n - 1);
        memo[n-1] = valueFirst;
        valueSecond = fibonacciDeclarative(n - 2);
        memo[n-2] = valueSecond;
        console.log("value:"+value);
        memo[n] = valueFirst + valueSecond;
        console.log("pre loop");
        for (let i = 0; i < memo.length; i++) {
          console.log("memo_list:" + memo[i]);
        }
        console.log("post loop");
        console.log("value: " + value);
        console.log("value from memo: " + memo[n]);
      }
    }
    return memo[n];
  }

  for (let i = 0; i < memo.length; i++) {
    console.log("memo_list:" + memo[i]);
  }

  return f(num);
}
