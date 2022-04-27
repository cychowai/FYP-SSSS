function generateImageShares(imgData, noOfShares, threshold, padLength) {
	var secret = "";
	for (var i = 0; i < imgData.data.length; i++) {
		secret = intToHex(imgData.data[i]) + secret;
	}

	var shares = generateShares(secret, noOfShares, threshold, padLength);

	var img_data_hex = new Array(noOfShares);
	for (var i = 0; i < shares.length; i++) {
		img_data_hex[i] = hexToInt(shares[i]);
	}

	return shares;
};