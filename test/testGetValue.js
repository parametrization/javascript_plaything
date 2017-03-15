const assert = require('chai').assert;

import {getNestedValue} from '../getValue';
import {getNestedValueDeclarative} from '../getValue';

describe('getNestedValue()', () => {
    it('should return undefined for undefined objects', () =>
        assert.isUndefined(getNestedValue(undefined, 'foo'))
    );
    it('should return undefined for undefined properties', () =>
        assert.isUndefined(getNestedValue({}, 'foo'))
    );
    it('should return the named property if defined', () =>
        assert.equal(getNestedValue({bar: 'baz'}, 'bar'), 'baz')
    );
    it('should return the deeply nested named property if defined', () =>
        assert.equal(getNestedValue({bar: { baz: 1 }}, 'bar.baz'), 1)
    );
    it('should return the deeply nested named property if defined three levels deep', () =>
        assert.equal(getNestedValue({bar: { baz: { foo: 1}}}, 'bar.baz.foo'), 1)
    );
    it('should return undefined for a deeply nested named property if undefined', () =>
        assert.isUndefined(getNestedValue({}, 'bar.baz'))
    );
    it('should not accept to get empty property names', () =>
        assert.throws(() => getNestedValue({}, ''), Error, 'Impossible to set null property')
    );
});

describe('getNestedValueDeclarative()', () => {
    it('should return undefined for undefined objects', () =>
        assert.isUndefined(getNestedValueDeclarative(undefined, 'foo'))
    );
    it('should return undefined for undefined properties', () =>
        assert.isUndefined(getNestedValueDeclarative({}, 'foo'))
    );
    it('should return the named property if defined', () =>
        assert.equal(getNestedValueDeclarative({bar: 'baz'}, 'bar'), 'baz')
    );
    it('should return the deeply nested named property if defined', () =>
        assert.equal(getNestedValueDeclarative({bar: { baz: 1 }}, 'bar.baz'), 1)
    );
    it('should return the deeply nested named property if defined three levels deep', () =>
        assert.equal(getNestedValue({bar: { baz: { foo: 1}}}, 'bar.baz.foo'), 1)
    );
    it('should return undefined for a deeply nested named property if undefined', () =>
        assert.isUndefined(getNestedValueDeclarative({}, 'bar.baz'))
    );
    it('should not accept to get empty property names', () =>
        assert.throws(() => getNestedValueDeclarative({}, ''), Error, 'Impossible to set null property')
    );
});
