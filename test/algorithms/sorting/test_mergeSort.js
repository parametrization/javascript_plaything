const assert = require('chai').assert;

import {mergeSortDeclarative} from '../../../src/algorithms/sorting/mergeSort';

describe('mergeSortDeclarative', () => {
  it('should sort an unordered appropriately', () =>
    assert.deepEqual(mergeSortDeclarative([5,3,21,0,99]), [0,3,5,21,99])
  );

  it('should sort a null list as null', () =>
    assert.deepEqual(mergeSortDeclarative([]), [])
  );

  it('should return a single item array when the input is length 1', () =>
    assert.deepEqual(mergeSortDeclarative([9]), [9])
  );

});
