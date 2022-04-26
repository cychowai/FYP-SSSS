function generateImageShares(imgData, noOfShares, threshold, padLength) {
	var secret = "";
	for (var i = 0; i < imgData.data.length; i++) {
		secret = intToHex(imgData.data[i]) + secret;
	}

	console.log(imgData.data[0]);
	console.log(intToHex(imgData.data[0]));
	console.log(imgData.data[imgData.data.length - 1]);
	console.log(intToHex(imgData.data[imgData.data.length - 1]));
	console.log(secret);

	var shares = generateShares(secret, noOfShares, threshold, padLength);

	var img_data_hex = new Array(noOfShares);
	for (var i = 0; i < shares.length; i++) {
		img_data_hex[i] = hexToInt(shares[i]);
	}

	console.log(secret.length);
	console.log(shares);
	console.log(img_data_hex);

	return shares;
};