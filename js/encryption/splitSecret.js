splitSecret = function () {
    //pass the shares here
    var noOfShares = parseInt(document.getElementById("noOfShares").value);
    console.log("noOfShares : ", noOfShares);
    var secret = document.getElementById("secret").value;
    console.log("secret : ", secret);
    var threshold = parseInt(document.getElementById("threshold").value);
    console.log("threshold : ", threshold);

    console.log("defaultExps: ", defaultExps);
    console.log("defaultLogs: ", defaultLogs);

    //checking whether the secret exists
    if (!secret) {
        alert("Please enter the secret!");
        return;
    }
	
	//lcp:return if threshold > noOfShares
	if (threshold > noOfShares) {
		return;
	}
	    
    //split the secret into shares with no = noOfShares
    //var shares = generateShares(strToHex(secret), noOfShares, threshold, maxPadLength); //more secure
	console.log(strToHex(secret));
	console.log(hexToBin(strToHex(secret)));
    var shares = generateShares(strToHex(secret), noOfShares, threshold, minPadLength); //shorter shares
    
	console.log(shares);
	console.log(shares.length);
    var sharesString = [];
    for (var i = 0; i < shares.length; i++) {
        var share = shares[i] + "\r\n\r\n"; //new line for shares
        sharesString.push(share);
    }

    document.getElementById("shares").value = sharesString.join(""); //remove ',' in the end of each shares
}