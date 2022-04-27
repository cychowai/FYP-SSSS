var sharesLoader = document.getElementById('sharesLoader');
sharesLoader.addEventListener('change', uploadFiles, false);

function uploadFiles(e) {
	var reader = new FileReader();
	reader.onload = function (event) {
		var oldVal = document.getElementById("temp_2").value;
		var newVal = oldVal + "\r\n\r\n" + event.target.result;
		document.getElementById("temp_2").value = newVal;
	}

	if (e.target.files[0]) {
		reader.readAsText(e.target.files[0]);
		document.getElementById("temp_1").value = e.target.files[0].name;

		var imageShares = document.getElementById("imageShares").innerHTML || "";
		console.log(imageShares);
		if (imageShares === "") {
			imageShares += e.target.files[0].name;
		}
		else {
			imageShares += ", " + e.target.files[0].name;
		}
		console.log(imageShares);
		document.getElementById("imageShares").innerHTML = imageShares;
	}
}
