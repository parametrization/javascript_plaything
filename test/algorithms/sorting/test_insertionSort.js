const assert = require('chai').assert;

import {insertionSortDeclarative} from '../../../src/algorithms/sorting/insertionSort';

describe('insertionSortDeclarative', () => {
  it('should sort an unordered appropriately', () =>
    assert.deepEqual(insertionSortDeclarative([5,3,21,0,99]), [0,3,5,21,99])
  );

  it('should sort a null list as null', () =>
    assert.deepEqual(insertionSortDeclarative([]), [])
  );

  it('should return a single item array when the input is length 1', () =>
    assert.deepEqual(insertionSortDeclarative([9]), [9])
  );

});
