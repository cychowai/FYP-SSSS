splitSecret = function () {
    //pass the parameters here
    var noOfShares = parseInt(document.getElementById("noOfShares").value);
    var secret = document.getElementById("secret").value;
    var threshold = parseInt(document.getElementById("threshold").value);

    //logging
    console.log("noOfShares : ", noOfShares);
    console.log("secret : ", secret);
    console.log("threshold : ", threshold);

    //checking whether the secret exists
    if (!secret) {
        alert("Please enter the secret!");
        return;
    }
    
    //split the secret into shares with no = noOfShares
    //var shares = generateShares(strToHex(secret), noOfShares, threshold, maxPadLength); //most secure
    var shares = generateShares(strToHex(secret), noOfShares, threshold, minPadLength); //shorter shares but still secure
    
    var sharesString = [];
    for (var i = 0; i < shares.length; i++) {
        var share = shares[i] + "\r\n\r\n"; //new line for shares
        sharesString.push(share); //push the shares into an array to display
    }

    document.getElementById("shares").value = sharesString.join(""); //remove ',' in the end of each shares
}