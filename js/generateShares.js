function generateShares(secret, noOfShares, threshold, padLength) {
    var subShares, len;
    var x = new Array(noOfShares);
    var y = new Array(noOfShares);

    secret = splitNumStringToIntArray("1" + hexToBin(secret), padLength);

    for (var i = 0, len = secret.length; i < len; i++) {
        subShares = getShares(secret[i], noOfShares, threshold);
        for (var j = 0; j < noOfShares; j++) {
            x[j] = x[j] || subShares[j].x.toString(defaultBase);
            y[j] = padLeft(subShares[j].y.toString(2)) + (y[j] || "");
        }
    }

    for (var i = 0; i < noOfShares; i++) {
        x[i] = constructPublicShareString(defaultBits, x[i], binToHex(y[i]));
    }

    return x;
}