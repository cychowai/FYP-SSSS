splitSecret = function () {
    //pass the shares here
    var noOfShares = document.getElementsByClassName("noOfShares")[0].value;
    console.log("noOfShares : ", noOfShares);
    var secret = document.getElementsByClassName("secret")[0].value;
    console.log("secret : ", secret);
    var threshold = document.getElementsByClassName("threshold")[0].value;
    console.log("threshold : ", threshold);

    //checking whether the secret exists
    if (!secret) {
        alert("Please enter the secret!");
        return;
    }

    //todo
    //split the secret into shares with no = noOfShares
    //var shares = generateShares(strToHex(secret), noOfShares, threshold, maxPadLength); //more secure
    var shares = generateShares(strToHex(secret), noOfShares, threshold, minPadLength); //shorter shares
    
    var sharesString = [];
    for (var i = 0; i < shares.length; i++) {
        var share = shares[i] + "\r\n\r\n";
        console.log("shares", i, " : ", share);
        sharesString.push(share);
    }

    document.getElementById("shares").value = sharesString.join("");
}