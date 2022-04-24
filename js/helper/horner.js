//Horner's method
function horner(x, coeffs) {
  var fx = 0;

  for (var i = coeffs.length - 1; i >= 0; i--) {
      if (fx !== 0) {
          fx = defaultExps[(defaultLogs[x] + defaultLogs[fx]) % maxShares] ^ coeffs[i];
      } else {
          fx = coeffs[i];
      }
  }
  
  return fx;
}