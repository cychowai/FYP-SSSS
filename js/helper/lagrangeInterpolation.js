//lagrange interpolation
function lagrangeInterpolation(point, x, y) {
    var sum = 0; //sum is 0 if a zero product term exists

    for (var i = 0; i < x.length; i++) {
        if (y[i]) {
            var product = defaultLogs[y[i]];
            for (var j = 0; j < x.length; j++) {
                if (i !== j) {
                    if (point === x[j]) { //exception case for a zero product term
                        product = -1; //for the next if statement to check
                        break;
                    }
                    //add maxShares to ensure the product after mod is positive
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