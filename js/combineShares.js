combineShares = function () {
    //pass the secret here
    var threshold = document.getElementsByClassName("threshold")[0].value;
    console.log("threshold : ", threshold);
    var shares = document.getElementsByClassName("shares")[0].value;
    console.log("shares : ", shares);
    
    //todo
    //combine shares into secret with no of shares >= threshold
    
    

    document.getElementById("showSecret").value = "secret here //todo";
}