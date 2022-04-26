var sharesLoader = document.getElementById('sharesLoader');
sharesLoader.addEventListener('change', upload_files, false);

function uploadFiles(e) {
	var reader = new FileReader();
	reader.onload = function (event) {
		var oldVal = document.getElementById("temp_2").value;
		var newVal = oldVal + "\r\n\r\n" + event.target.result;
		document.getElementById("temp_2").value = newVal;
		console.log(oldVal);
		console.log(newVal);
		console.log(event.target.result);
	}

	if (e.target.files[0]) {
		reader.readAsText(e.target.files[0]);
		console.log(e.target.files[0]);
		console.log(e.target.files.length);
		console.log(e.target.files[0].name);
		document.getElementById("temp_1").value = e.target.files[0].name;
	}
}
