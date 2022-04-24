combineShares = function () {
    //pass the parameter here
    var threshold = parseInt(document.getElementById("threshold").value);
    var sharesString = document.getElementById("sharesCombine").value;

    //logging
    console.log("threshold : ", threshold);
    console.log("shares from the input : ", sharesString);

    //checking whether the shares exist
    if (!sharesString) {
        alert("Please enter the shares!");
        return;
    }
    
    //combine shares into secret with no of shares >= threshold
    var shares = sharesString.trim().split(/\s+/); //identify shares with space
    var secret = hexToStr(regenerateSecret(shares));

    //logging
    console.log("shares : ", shares);
    console.log("secret : ", secret);
    
    document.getElementById("showSecret").value = secret;
}