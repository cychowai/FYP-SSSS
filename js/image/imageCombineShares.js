imageCombineShares = function () {
	var threshold = parseInt(document.getElementById("threshold_2").value);
	console.log("threshold : ", threshold);
	var img_size = document.getElementById("temp_1").value;
	var sharesString = document.getElementById("temp_2").value;
	console.log("shares from the input : ", sharesString);

	if (!sharesString) {
		alert("Please enter the shares!");
		return;
	}

	console.log(img_size);
	var output_width = parseInt(img_size.substring(img_size.lastIndexOf("-") + 1, img_size.lastIndexOf("&")));
	var output_height = parseInt(img_size.substring(img_size.lastIndexOf("&") + 1, img_size.lastIndexOf(".")));

	console.log(output_width);
	console.log(output_height);

	var shares = sharesString.trim().split(/\s+/); //identify shares with space
	console.log("shares : ", shares);

	var secret = regenerateSecret(shares);

	console.log("secret : ", secret);
	//document.getElementById("showSecret").value = secret;

	var img_data_array = new Uint8ClampedArray(secret.length / 4);
	for (var i = 0; i < secret.length; i++) {
		img_data_array[i] = hexToInt(secret, (secret.length - i * 2 * bytesPerChar));
	}

	console.log(img_data_array);

	var canvas = document.getElementById('myCanvas2');
	var ctx = canvas.getContext('2d');
	document.getElementById("myCanvas2").width = output_width;
	document.getElementById("myCanvas2").height = output_height;
	var imgData = ctx.getImageData(0, 0, output_width, output_height);

	for (var i = 0; i < img_data_array.length; i++) {
		imgData.data[i] = img_data_array[i];
	}

	ctx.putImageData(imgData, 0, 0);

	document.getElementById("temp_1").value = "";
	document.getElementById("temp_2").value = "";

}