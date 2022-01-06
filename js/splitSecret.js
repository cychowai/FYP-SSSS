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

    //shares that return
    var secretHex = strToHex(secret);
    var shares = share(secretHex, noOfShares, threshold, 1024);

    //todo
    //split the secret into shares with no = noOfShares

    //for (var i = 0; i < noOfShares; i++) {
        //shares.push(generateShares());
    //}

    document.getElementById("shares").value = shares;
}