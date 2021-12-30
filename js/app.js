(function () {
    //get the input values from HTML 
    var threshold = document.getElementsByClassName("threshold")[0].value;
    var noOfShares = document.getElementsByClassName("noOfShares")[0].value;
    var secret = document.getElementsByClassName("secret")[0].value;
    var shares = document.getElementsByClassName("shares")[0].value;

    //check the values in f12 developer view
    console.log("threshold : ", threshold);
    console.log("noOfShares : ", noOfShares);
    console.log("secret : ", secret);
    console.log("shares : ", shares);

    //todo
    //implement of SSSS

    //todo
    //warning for invalid input done later by Jim

    splitSecret = function () {
        //pass the shares here
        document.getElementById("shares").value = "...Shares //todo";
    }
    
    combineShares = function () {
        //pass the secret here
        document.getElementById("showSecret").value = "...Secret //todo";
    }
})();
