combineShares = function () {
    //pass the secret here
    var threshold = document.getElementsByClassName("threshold")[0].value;
    console.log("threshold : ", threshold);
    var sharesString = document.getElementsByClassName("shares")[0].value;
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

    //reset todo later
}