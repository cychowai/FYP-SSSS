function getImageShares(secret, noOfShares, threshold, padLength) {
    var subShares;
    var x = new Array(noOfShares);
    var y = new Array(noOfShares);

    //append "1" in front as a marker for leading zeros in the secret
	console.log(secret);
    //secret = splitStringToArray("1" + hexToBin(secret), padLength);
	//console.log(secret);	

    for (var i = 0; i < secret.length; i++) {
        subShares = getShares(secret[i], noOfShares, threshold);
        for (var j = 0; j < noOfShares; j++) {
            x[j] = x[j] || subShares[j].x.toString(defaultBase);
            y[j] = padLeft(subShares[j].y.toString(2)) + (y[j] || "");
        }
    }
	console.log(x);
	console.log(y);

    //for (var i = 0; i < noOfShares; i++) {
    //    x[i] = constructShare(defaultBits, x[i], binToHex(y[i]));
    //}
	
	console.log(secret.length);
	
	for (var i = 0; i < noOfShares; i++) {
		console.log(binToHex(y[i]).length);
	}
	
	
	
	var y_array = new Array(noOfShares);
	for (var i = 0; i < noOfShares; i++) {
		var temp_img_array = new Uint8ClampedArray(secret.length);
		y_array[i] = temp_img_array;
		var temp_y_string = binToHex(y[i]);
		for (var j = 0; j < secret.length; j++){
			y_array[i][j] = hexToInt_2((temp_y_string), j);
		}
	}
	
	for (var i = 0; i < noOfShares; i++) {
		console.log(y_array[i]);
	}
	
	console.log("ffefdfcf");
	console.log(parseInt("ff", 16));
	console.log(parseInt("ef", 16));
	console.log(parseInt("df", 16));
	console.log(parseInt("cf", 16));
	console.log(hexToInt_2("ffefdfcfbeaf", 1));
	console.log(hexToInt_2("ffefdfcfbeaf", 2));
	console.log(hexToInt_2("ffefdfcfbeaf", 3));
	console.log(hexToInt_2("ffefdfcfbeaf", 4));
	
	console.log(x);

    return y_array;
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