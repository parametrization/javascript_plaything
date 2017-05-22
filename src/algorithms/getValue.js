function getValue(object, propertyName) {
    if (!propertyName) throw new Error('Impossible to set null property');
    return typeof object === 'undefined' ? undefined : object[propertyName];
}

export function getNestedValueDeclarative(object, propertyName) {
    return propertyName.split('.').reduce(getValue, object);
}

export function getNestedValueImperative(object, propertyName) {
    if (!propertyName) throw new Error('Impossible to set null property');
    let subObject = object,
        parts = propertyName.split('.'),
        len = parts.length,
        i;

    for (i = 0; i < len; i++) {
        if (!subObject || typeof subObject === 'undefined') return undefined;
        subObject = subObject[parts[i]];
    }

    return subObject;
}
