function updateThreshold_2() {
    //read the number of shares and threshold from the HTML
    var threshold = parseInt(document.getElementById("threshold_2").value);

    //check the number of threshold and update the number of threshold
    if (threshold < MIN_VALUE) {
        document.getElementById("threshold_2").value = MIN_VALUE;
        alert("Number of required shares should be at least " + MIN_VALUE + 
            ", please enter the number of required shares greater than " + MIN_VALUE);
    } 
    else if (threshold >= MAX_VALUE) {
        document.getElementById("threshold_2").value = MAX_VALUE;
        alert("The process will be very low if the number of required shares are greater than "
            + MAX_VALUE + ", please use a number lower than " + MAX_VALUE);
    } 
    else {
        document.getElementById("threshold_2").value = threshold;
    }

    //logging
    console.log("threshold : ", threshold);
}

function updateShares_2() {
    //read the number of shares and threshold from the HTML
    var noOfShares = parseInt(document.getElementById("noOfShares_2").value);

    //check the number of shares and update the number of shares
    if (noOfShares < MIN_VALUE) {
        document.getElementById("noOfShares_2").value = MIN_VALUE;
        alert("Number of shares should be at least 2, please enter the number of shares greater than 2");
    } 
    else if (noOfShares >= MAX_VALUE) {
        document.getElementById("noOfShares_2").value = MAX_VALUE;
        alert("The process will be very low if the number of shares are greater than "
            + MIN_VALUE + ", please use a number lower than " + MAX_VALUE);
    } 
    else {
        document.getElementById("noOfShares_2").value = noOfShares;
    }

    //logging
    console.log("noOfShares : ", noOfShares);
}

function checkUpdate_2() {
    //read the number of shares and threshold from the HTML
    var threshold = parseInt(document.getElementById("threshold_2").value);
    var noOfShares = parseInt(document.getElementById("noOfShares_2").value);

    //check whether threshold is not greater than the number of shares
    if (threshold > noOfShares) {
        document.getElementById("threshold_2").value = defaultThreshold;
        document.getElementById("noOfShares_2").value = defaultShares;
        alert("Threshold should not be greater than number of shares");

    }
    else {
        document.getElementById("threshold_2").value = threshold;
        document.getElementById("noOfShares_2").value = noOfShares;
    }

    //logging
    console.log("threshold : ", threshold);
    console.log("noOfShares : ", noOfShares);
}
