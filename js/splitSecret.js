splitSecret = function () {
    //pass the shares here
    var noOfShares = parseInt(document.getElementById("noOfShares").value);
    console.log("noOfShares : ", noOfShares);
    var secret = document.getElementById("secret").value;
    console.log("secret : ", secret);
    var threshold = parseInt(document.getElementById("threshold").value);
    console.log("threshold : ", threshold);

    //checking whether the secret exists
    if (!secret) {
        alert("Please enter the secret!");
        return;
    }

    //todo
    
    //split the secret into shares with no = noOfShares

    document.getElementById("shares").value = '//todo';
}