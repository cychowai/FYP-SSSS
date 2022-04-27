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
	}
}
