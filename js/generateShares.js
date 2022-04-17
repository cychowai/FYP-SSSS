function generateShares(secret, noOfShares, threshold, padLength) {
    var subShares, len;
    var x = new Array(noOfShares);
    var y = new Array(noOfShares);

    //append "1" in front as a marker for leading zeros in the secret
    secret = splitStringToArray("1" + hexToBin(secret), padLength); 

    for (var i = 0, len = secret.length; i < len; i++) {
        subShares = getShares(secret[i], noOfShares, threshold);
        for (var j = 0; j < noOfShares; j++) {
            x[j] = x[j] || subShares[j].x.toString(defaultBase);
            y[j] = padLeft(subShares[j].y.toString(2)) + (y[j] || "");
        }
    }

    for (var i = 0; i < noOfShares; i++) {
        x[i] = constructShare(defaultBits, x[i], binToHex(y[i]));
    }

    return x;
}

function getShares(secret, numShares, threshold) {
    var shares = [];
    var coeffs = [secret];
    var len;

    for (var i = 1; i < threshold; i++) {
        coeffs[i] = parseInt(getRandomValues(defaultBits), 2); 
    }
    for (var i = 1, len = numShares + 1; i < len; i++) {
        shares[i - 1] = {
            x: i,
            y: getRoots(i, coeffs)
        };
    }
    return shares;
}