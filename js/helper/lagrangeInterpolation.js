//lagrange interpolation
function lagrangeInterpolation(point, x, y) {
  var sum = 0; //sum is 0 if a zero product term exists
  var product;
  for (var i = 0; i < x.length; i++) {
      if (y[i]) {
          product = defaultLogs[y[i]];
          for (var j = 0; j < x.length; j++) {
              if (i !== j) {
                  if (point === x[j]) {
                      product = -1; // fix for a zero product term
                      break;
                  }
                  //x = 0
                  //+ maxShares to ensure the product after mod is positive
                  product = (product + defaultLogs[point ^ x[j]] - defaultLogs[x[i] ^ x[j]] + maxShares) % maxShares;
              }
          }
          //case for excepting for i = j condition in lagrange interpolation
          if (product !== -1) { 
              //XOR
              sum = sum ^ defaultExps[product];
          }
      }
  }
  return sum;
}