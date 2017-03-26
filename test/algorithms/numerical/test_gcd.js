const assert = require('chai').assert;

import {gcdIterative} from '../../../src/algorithms/numerical/gcd';
import {gcdDeclarative} from '../../../src/algorithms/numerical/gcd';

describe('gcdIterative()', () => {
  it('should return 6 for gcd(36,42)', () =>
    assert.equal(gcdIterative(36,42), 6)
  );
  it('should return 6 for gcd(42,36)', () =>
    assert.equal(gcdIterative(42,36), 6)
  );
  it('should return 9 for gcd(9,78)', () =>
    assert.equal(gcdIterative(9,78), 3)
  );
  it('should return 9 for gcd(78,9)', () =>
    assert.equal(gcdIterative(78,9), 3)
  );
  it('should return 25 for gcd(25,25)', () =>
    assert.equal(gcdIterative(25,25), 25)
  );
  it('should return 0 for gcd(0,0)', () =>
    assert.equal(gcdIterative(0,0), 0)
  );
  it('should throw an error when first property is not an integer.', () =>
    assert.throws(() => gcdIterative('poo',1), Error, 'argument \'a\' should be a number.')
  );
  it('should throw an error when second property is not an integer.', () =>
    assert.throws(() => gcdIterative(1, 'poo'), Error, 'argument \'b\' should be a number.')
  );
  it('should throw an error when neither property is an integer.', () =>
    assert.throws(() => gcdIterative('doo', 'poo'), Error, 'argument \'a\' should be a number.')
  );
  it('should throw an error when the first property is a number, but not an integer.', () =>
    assert.throws(() => gcdIterative(1.1, 1), Error, 'argument \'a\' should be an integer.')
  );
  it('should throw an error when the second property is number, but not an integer.', () =>
    assert.throws(() => gcdIterative(49, 98.6), Error, 'argument \'b\' should be an integer.')
  );
  it('should throw an error when both properties are numbers but neither property is an integer.', () =>
    assert.throws(() => gcdIterative(3.14, 25e5), Error, 'argument \'a\' should be an integer.')
  );

});

describe('gcdDeclarative()', () => {
  it('should return 6 for gcd(36,42)', () =>
    assert.equal(gcdDeclarative(36,42), 6)
  );
  it('should return 6 for gcd(42,36)', () =>
    assert.equal(gcdDeclarative(42,36), 6)
  );
  it('should return 9 for gcd(9,78)', () =>
    assert.equal(gcdDeclarative(9,78), 3)
  );
  it('should return 9 for gcd(78,9)', () =>
    assert.equal(gcdDeclarative(78,9), 3)
  );
  it('should return 25 for gcd(25,25)', () =>
    assert.equal(gcdDeclarative(25,25), 25)
  );
  it('should return 0 for gcd(0,0)', () =>
    assert.equal(gcdDeclarative(0,0), 0)
  );
  it('should throw an error when first property is not an integer.', () =>
    assert.throws(() => gcdDeclarative('poo',1), Error, 'argument \'a\' should be a number.')
  );
  it('should throw an error when second property is not an integer.', () =>
    assert.throws(() => gcdDeclarative(1, 'poo'), Error, 'argument \'b\' should be a number.')
  );
  it('should throw an error when neither property is an integer.', () =>
    assert.throws(() => gcdDeclarative('doo', 'poo'), Error, 'argument \'a\' should be a number.')
  );
  it('should throw an error when the first property is a number, but not an integer.', () =>
    assert.throws(() => gcdDeclarative(1.1, 1), Error, 'argument \'a\' should be an integer.')
  );
  it('should throw an error when the second property is number, but not an integer.', () =>
    assert.throws(() => gcdDeclarative(49, 98.6), Error, 'argument \'b\' should be an integer.')
  );
  it('should throw an error when both properties are numbers but neither property is an integer.', () =>
    assert.throws(() => gcdDeclarative(3.14, 25e5), Error, 'argument \'a\' should be an integer.')
  );
});
