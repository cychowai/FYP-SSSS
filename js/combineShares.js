combineShares = function () {
    //pass the secret here
    var threshold = parseInt(document.getElementById("threshold").value);
    console.log("threshold : ", threshold);
    var sharesString = document.getElementById("sharesCombine").value;
    console.log("shares from the input : ", sharesString);

    //checking whether the shares exist
    if (!sharesString) {
        alert("Please enter the shares!");
        return;
    }
    
    //todo
    
    //combine shares into secret with no of shares >= threshold
    var shares = sharesString.trim().split(/\s+/);
    console.log("shares : ", shares);
    var secret = hexToStr(regenerateSecret(shares));
    console.log("secret : ", secret);
    document.getElementById("showSecret").value = secret;
}