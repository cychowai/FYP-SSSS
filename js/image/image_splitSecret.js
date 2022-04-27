function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

image_splitSecret = function () {
    //pass the shares here
    var noOfShares = parseInt(document.getElementById("noOfShares_2").value);
    console.log("noOfShares : ", noOfShares);
    var threshold = parseInt(document.getElementById("threshold_2").value);
    console.log("threshold : ", threshold);
	
	var canvas = document.getElementById('myCanvas1');
	var ctx = canvas.getContext('2d');
	
	var imageLoader = document.getElementById('imageLoader');

    console.log("defaultExps: ", defaultExps);
    console.log("defaultLogs: ", defaultLogs);
	
	//return if threshold > noOfShares
	if (threshold > noOfShares) {
		return;
	}
	
	var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
	
	console.log(imgData);
		    
    //split the secret into shares with no = noOfShares
	var shares = generateImageShares(imgData, noOfShares, threshold, minPadLength);
	
	for (var i = 0; i < shares.length; i++) {
		var name = "Share" + parseInt(i+1) + "_" + shares.length + "-" + imgData.width + "&" + imgData.height;
		download(name, shares[i]);
	}
	
	
		
}