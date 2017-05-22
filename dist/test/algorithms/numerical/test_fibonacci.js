'use strict';

var _fibonacci = require('../../../src/algorithms/numerical/fibonacci');

var assert = require('chai').assert;

describe('fibonacciDeclarative()', function () {
  it('should return 1 for base case fib(1)', function () {
    return assert.equal((0, _fibonacci.fibonacciDeclarative)(1), 1);
  });
  it('should return 1 for base case fib(2)', function () {
    return assert.equal((0, _fibonacci.fibonacciDeclarative)(2), 1);
  });
  it('should return 21 for base case fib(8)', function () {
    return assert.equal((0, _fibonacci.fibonacciDeclarative)(8), 21);
  });
  it('should return 102334155 for base case fib(20)', function () {
    return assert.equal((0, _fibonacci.fibonacciDeclarative)(40), 102334155);
  });
});

describe('fibonacciImperative()', function () {
  it('should return 1 for base case fib(1)', function () {
    return assert.equal((0, _fibonacci.fibonacciImperative)(1), 1);
  });
  it('should return 1 for base case fib(2)', function () {
    return assert.equal((0, _fibonacci.fibonacciImperative)(2), 1);
  });
  it('should return 21 for base case fib(8)', function () {
    return assert.equal((0, _fibonacci.fibonacciImperative)(8), 21);
  });
  it('should return 102334155 for base case fib(20)', function () {
    return assert.equal((0, _fibonacci.fibonacciImperative)(40), 102334155);
  });
});
//# sourceMappingURL=test_fibonacci.js.map