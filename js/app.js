function updateThreshold() {
    //read the number of shares and threshold from the HTML
    var threshold = document.getElementsByClassName("threshold")[0].value;
    var noOfShares = document.getElementsByClassName("noOfShares")[0].value;
    var defaultThreshold = 3;

    //check the number of threshold and update the number of threshold
    if (threshold > noOfShares) {
        document.getElementById("threshold").value = defaultThreshold;
        alert("Threshold should not be greater than number of shares");
    }
    else if (threshold < 2) {
        document.getElementById("threshold").value = defaultThreshold;
        alert("Number of required shares should be at least 2, please enter the number of required shares greater than 2");
    } 
    else if (threshold >= 100) {
        document.getElementById("threshold").value = defaultThreshold;
        alert("The process will be very low if the number of required shares are greater than 100, please use a number lower than 100");
    } 
    else {
        document.getElementsByClassName("threshold")[0].innerHTML = threshold;
    }

    //logging
    console.log("threshold : ", threshold);
    console.log("noOfShares : ", noOfShares);
}

function updateShares() {
    //read the number of shares and threshold from the HTML
    var threshold = document.getElementsByClassName("threshold")[0].value;
    var noOfShares = document.getElementsByClassName("noOfShares")[0].value;
    var defaultShares = 5;

    //check the number of shares and update the number of shares
    if (threshold > noOfShares) {
        document.getElementById("noOfShares").value = defaultShares;
        alert("Threshold should not be greater than number of shares");
    }
    else if (noOfShares < 2) {
        document.getElementById("noOfShares").value = defaultShares;
        alert("Number of shares should be at least 2, please enter the number of shares greater than 2");
    } 
    else if (noOfShares >= 100) {
        document.getElementById("noOfShares").value = defaultShares;
        alert("The process will be very low if the number of shares are greater than 100, please use a number lower than 100");
    } 
    else {
        document.getElementsByClassName("noOfShares")[0].innerHTML = noOfShares;
    }

    //logging
    console.log("threshold : ", threshold);
    console.log("noOfShares : ", noOfShares);
}
