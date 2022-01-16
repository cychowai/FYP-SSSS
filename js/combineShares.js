combineShares = function () {
    //pass the secret here
    var threshold = document.getElementsByClassName("threshold")[0].value;
    console.log("threshold : ", threshold);
    var shares = document.getElementsByClassName("shares")[0].value;
    console.log("shares : ", shares);

    //checking whether the shares exist
    if (!shares) {
        alert("Please enter the shares!");
        return;
    }

    //combine shares into secret with no of shares >= threshold
    var sharesInput = shares;

	var shares_0 = sharesInput.split(/[\s ,]+/);

	var comb = secrets.combine(shares_0);


	console.log(shares_0);
	console.log(comb);

	var combStr = secrets.hex2str(comb);
 
    //document.getElementById("showSecret").value = "Original secret: " + combStr;
		
	if (combStr.substring(0,10) == "data:image") {
		var link = document.createElement('a');
		link.href = combStr;
		link.download = 'Download.jpg';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	else {
		document.getElementById("showSecret").value = "Original secret: " + combStr;
	}
}