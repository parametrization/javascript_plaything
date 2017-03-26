const assert = require('chai').assert;

import {fastExponentiationDeclarative} from '../../../src/algorithms/numerical/fastExponentiation';
import {fastExponentiationImperative} from '../../../src/algorithms/numerical/fastExponentiation';

describe('fastExponentiationDeclarative()', () => {
  it('should return 16 for -2^4', () =>
    assert.equal( fastExponentiationDeclarative(-2,4), 16)
  );
  it('should return -8 for -2^3', () =>
    assert.equal( fastExponentiationDeclarative(-2,3), -8)
  );
  it('should return 1 for 1^1007', () =>
    assert.equal( fastExponentiationDeclarative(1,1007), 1)
  );
  it('should return 1 for 1^1007', () =>
    assert.equal( fastExponentiationDeclarative(1,1007), 1)
  );
  it('should return 1 for base 1', () =>
    assert.equal( fastExponentiationDeclarative(1,1007), 1)
  );
  it('should return 4 for 2^2', () =>
    assert.equal( fastExponentiationDeclarative(2,2), 4)
  );
  it('should return 8 for 2^3', () =>
    assert.equal( fastExponentiationDeclarative(2,3), 8)
  );
  it('should return 16 for 2^4', () =>
    assert.equal( fastExponentiationDeclarative(2,4), 16)
  );
  it('should return 0.25 for 2^-2', () =>
    assert.equal( fastExponentiationDeclarative(2,-2), 0.25)
  );
  it('should return -6 for -2^3', () =>
    assert.equal( fastExponentiationDeclarative(2,-2), 0.25)
  );
});

  describe('fastExponentiationImperative()', () => {
    it('should return 16 for -2^4', () =>
      assert.equal( fastExponentiationImperative(-2,4), 16)
    );
    it('should return -8 for -2^3', () =>
      assert.equal( fastExponentiationImperative(-2,3), -8)
    );
    it('should return 1 for 1^1007', () =>
      assert.equal( fastExponentiationImperative(1,1007), 1)
    );
    it('should return 1 for 1^1007', () =>
      assert.equal( fastExponentiationImperative(1,1007), 1)
    );
    it('should return 1 for base 1', () =>
      assert.equal( fastExponentiationImperative(1,1007), 1)
    );
    it('should return 4 for 2^2', () =>
      assert.equal( fastExponentiationImperative(2,2), 4)
    );
    it('should return 8 for 2^3', () =>
      assert.equal( fastExponentiationImperative(2,3), 8)
    );
    it('should return 16 for 2^4', () =>
      assert.equal( fastExponentiationImperative(2,4), 16)
    );
    it('should return 0.25 for 2^-2', () =>
      assert.equal( fastExponentiationImperative(2,-2), 0.25)
    );
    it('should return -6 for -2^3', () =>
      assert.equal( fastExponentiationImperative(2,-2), 0.25)
    );
});
