splitSecret = function () {
    //pass the shares here
    var noOfShares = document.getElementsByClassName("noOfShares")[0].value;
    console.log("noOfShares : ", noOfShares);
	var secret = "";
	if (!secret){
		secret = document.getElementsByClassName("secret")[0].value;
	}
    console.log("secret : ", secret);
	var threshold = document.getElementsByClassName("threshold")[0].value;
    console.log("threshold : ", threshold);

    //checking whether the secret exists
    if (!secret) {
        alert("Please enter the secret!");
        return;
    }

    //split the secret into shares with no = noOfShares
    var key = secret;
	if (!key) {
		alert('Enter a secret');
		return;
	}
	var shareCount = parseInt(noOfShares);
	var threshold = parseInt(threshold);

	if (threshold > shareCount) {
		alert('Required shares must be lower or equal to the number of shares');
		return;
	}

	var shares = secrets.share(secrets.str2hex(key), shareCount, threshold);

	var shareString = "";

	for(var i = 0; i < shares.length; i++) {
		shareString += "Share " + parseInt(i+1) + "/" + shares.length + ": " + shares[i] + "\n";
	}

    document.getElementById("shares").value = shareString;
}