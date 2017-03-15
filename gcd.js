export function gcdIterative(a, b) {
    validate(a, b);

    if (bothZero(a,b)) return 0;

    while(a % b != 0) {
      let remainder = a % b;
      a = b;
      b = remainder;
    }

    return b;
}

export function gcdDeclarative(a, b) {
    validate(a, b);

    if (bothZero(a,b)) return 0;

    if (a % b === 0) return b;

    return gcdDeclarative(b, a % b);
}

function bothZero(a,b) {
  if (a === 0 && b === 0) {
    return true;
  }
  return false;
}

function validate(a,b) {
  if (typeof a != 'number') {
    throw new Error('argument \'a\' should be a number.');
  }

  if (typeof b != 'number') {
    throw new Error('argument \'b\' should be a number.');
  }

  if (a % 1 != 0) {
    throw new Error('argument \'a\' should be an integer.');
  }

  if (b % 1 != 0) {
    throw new Error('argument \'b\' should be an integer.');
  }
}
