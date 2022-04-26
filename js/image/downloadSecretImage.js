downloadImageShares = function(filename, img_data_array, width, height) {
	var canvas = document.getElementById('myCanvas1');
	var ctx = canvas.getContext('2d');
	document.getElementById("myCanvas1").width = width;
	document.getElementById("myCanvas1").height = height;
	var imgData = ctx.getImageData(0,0,width,height);

	for (var i = 0; i < img_data_array.length; i++) {
		imgData.data[i] = img_data_array[i];
	}

	ctx.putImageData(imgData, 0, 0);

	if (document.getElementById('myCanvas1')) {
		var canvas = document.getElementById('myCanvas1');
		var ctx = canvas.getContext('2d');
		console.log(canvas.toDataURL());

		var link = document.createElement('a');
		link.href = canvas.toDataURL();
		link.download = filename + ".jpg";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
}

downloadSecretImage = function() {
	if (document.getElementById('myCanvas2')) {
		var canvas = document.getElementById('myCanvas2');
		var ctx = canvas.getContext('2d');
		console.log(canvas.toDataURL());
		
		var link = document.createElement('a');
		link.href = canvas.toDataURL();
		link.download = 'secret.jpg';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
}