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
    var shares = generateShares(strToHex(secret), noOfShares, threshold, 1024);
    console.log("shares : ", shares);
    /*
    var sharesString;
    for (var i = 0; i < noOfShares; i++) {
        var share = shares[i];
        var li = document.createElement("li");
        li.classList.add("part");
        li.textContent = share;
        sharesString.append(li);
        //sharesString.push(share);
    }
    */

    document.getElementById("shares").value = shares;
}