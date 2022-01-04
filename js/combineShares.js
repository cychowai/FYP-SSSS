combineShares = function () {
    //pass the secret here
    var threshold = document.getElementsByClassName("threshold")[0].value;
    console.log("threshold : ", threshold);
    var shares = document.getElementsByClassName("shares")[0].value;
    console.log("shares : ", shares);

    //checking whether the shares exist
    if (!shares) {
        alert("Please enter the shares!");
        return;
    }

    //secret that returns
    var secret = 'secret';
    
    //todo
    //combine shares into secret with no of shares >= threshold
    
    

    document.getElementById("showSecret").value = secret;
}