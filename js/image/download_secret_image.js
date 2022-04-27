download_secret_image = function () {
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