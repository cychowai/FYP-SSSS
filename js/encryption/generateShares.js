function generateShares(secret, noOfShares, threshold, padLength) {
    var subShares;
    var x = new Array(noOfShares);
    var y = new Array(noOfShares);

    //append "1" in front as a marker for leading zeros in the secret
	console.log(secret);
    secret = splitStringToArray("1" + hexToBin(secret), padLength);
	console.log(secret);	

    for (var i = 0; i < secret.length; i++) {
        subShares = getShares(secret[i], noOfShares, threshold);
        for (var j = 0; j < noOfShares; j++) {
            x[j] = x[j] || subShares[j].x.toString(defaultBase);
            y[j] = padLeft(subShares[j].y.toString(2)) + (y[j] || "");
        }
    }
	console.log(x);
	console.log(y);

    for (var i = 0; i < noOfShares; i++) {
        x[i] = constructShare(defaultBits, x[i], binToHex(y[i]));
    }
	
	console.log(x);

    return x;
}

function getShares(secret, numShares, threshold) {
    var shares = [];
    var coeffs = [secret];

    for (var i = 1; i < threshold; i++) {
        coeffs[i] = parseInt(getRandomValues(defaultBits), 2); 
    }
    for (var i = 1; i < numShares + 1; i++) {
        shares[i - 1] = {
            x: i,
            y: horner(i, coeffs)
        };
    }
    return shares;
}