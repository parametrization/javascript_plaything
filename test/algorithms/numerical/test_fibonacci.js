const assert = require('chai').assert;

import {fibonacciDeclarative} from '../../../src/algorithms/numerical/fibonacci';
import {fibonacciImperative} from '../../../src/algorithms/numerical/fibonacci';

describe('fibonacciDeclarative()', () => {
  it('should return 1 for base case fib(1)', () =>
    assert.equal(fibonacciDeclarative(1), 1)
  );
  it('should return 1 for base case fib(2)', () =>
    assert.equal(fibonacciDeclarative(2), 1)
  );
  it('should return 21 for base case fib(8)', () =>
    assert.equal(fibonacciDeclarative(8), 21)
  );
  it('should return 102334155 for base case fib(20)', () =>
    assert.equal(fibonacciDeclarative(40), 102334155)
  );
});

describe('fibonacciImperative()', () => {
  it('should return 1 for base case fib(1)', () =>
    assert.equal(fibonacciImperative(1), 1)
  );
  it('should return 1 for base case fib(2)', () =>
    assert.equal(fibonacciImperative(2), 1)
  );
  it('should return 21 for base case fib(8)', () =>
    assert.equal(fibonacciImperative(8), 21)
  );
  it('should return 102334155 for base case fib(20)', () =>
    assert.equal(fibonacciImperative(40), 102334155)
  );
});
