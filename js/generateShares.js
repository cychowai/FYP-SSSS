function generateShares(secret, numShares, threshold, padLength) {
    var subShares,
    x = new Array(numShares),
    y = new Array(numShares),
    i,
    j,
    len;

    padLength = padLength || 128; //at least 128
    secret = "1" + hexToBin(secret); // append a 1 as a marker so that we can preserve the correct number of leading zeros in our secret
    secret = splitNumStringToIntArray(secret, padLength);

    for (i = 0, len = secret.length; i < len; i++) {
        subShares = getShares(secret[i], numShares, threshold);
        for (j = 0; j < numShares; j++) {
            x[j] = x[j] || subShares[j].x.toString(defaultBase);
            y[j] = padLeft(subShares[j].y.toString(2)) + (y[j] || "");
        }
    }

    for (i = 0; i < numShares; i++) {
        x[i] = constructPublicShareString(defaultBits, x[i], binToHex(y[i]));
    }

    return x;
}