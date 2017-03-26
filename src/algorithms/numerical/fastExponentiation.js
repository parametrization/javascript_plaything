function isOdd(num) {
  if (num % 2 === 0) return false;
  return true;
}

//16^-2 === 4
export function fastExponentiationDeclarative(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  if (exponent < 0) return fastExponentiationDeclarative(1/base, -1 * exponent);
  if (isOdd(exponent)) {
    return base * fastExponentiationDeclarative(base * base, (exponent - 1)/2);
  } else {
    return fastExponentiationDeclarative(base * base, exponent/2);
  }
}

export function fastExponentiationImperative(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  if (exponent < 0) {
    exponent *= -1;
    base = 1/base;
  }
  let ans = 1;
  let tempExp = exponent;
  while (tempExp > 1) {
    ans *= base * base;
    if (isOdd(tempExp)) {
      tempExp = (tempExp - 1)/2;
      ans *= base;
    } else {
      tempExp = tempExp/2;
    }
  }
  return ans;
}
