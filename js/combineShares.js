combineShares = function () {
    //pass the secret here
    var threshold = document.getElementsByClassName("threshold")[0].value;
    console.log("threshold : ", threshold);
    var sharesString = document.getElementsByClassName("shares")[0].value;
    console.log("shares : ", shares);

    //checking whether the shares exist
    if (!shares) {
        alert("Please enter the shares!");
        return;
    }
    
    //todo
    //combine shares into secret with no of shares >= threshold
    var shares = sharesString.trim().split(/\s+/);

    try {
        var secret = hexToStr(regenerateSecret(shares));
    }
    catch (error) {
        alert(error.message);
    }
    
    document.getElementById("showSecret").value = secret;

    //reset todo later
}