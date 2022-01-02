function updateShares() {
    //read the number of shares from the HTML
    var noOfShares = document.getElementsByClassName("noOfShares")[0].value;

    //check the number of shares and update the number of shares
    if (noOfShares < 2) {
        document.getElementsByClassName("noOfShares")[0].innerHTML = 5;
        alert("Number of shares should be at least 2, please enter the number of shares greater than 2");
        console.log("noOfShares : ", noOfShares);
    } 
    else if (noOfShares >= 100) {
        document.getElementsByClassName("noOfShares")[0].innerHTML = 5;
        alert("The process will be very low if the number of shares are greater than 100, please use a number lower than 100");
        console.log("noOfShares : ", noOfShares);
    } 
    else {
        document.getElementsByClassName("noOfShares")[0].innerHTML = noOfShares;
        console.log("noOfShares : ", noOfShares);
    }
}

function updateThreshold() {
    //read the number of shares and threshold from the HTML
    var threshold = document.getElementsByClassName("threshold")[0].value;
    var noOfShares = document.getElementsByClassName("noOfShares")[0].value;

    //check the number of threshold and update the number of threshold
    if (threshold > noOfShares) {
        document.getElementsByClassName("threshold")[0].innerHTML = 3;
        alert("Threshold should not be greater than number of shares");
        console.log("threshold : ", threshold);
        console.log("noOfShares : ", noOfShares);
    }
    else if (threshold < 2) {
        document.getElementsByClassName("threshold")[0].innerHTML = 3;
        alert("Number of required shares should be at least 2, please enter the number of required shares greater than 2");
        console.log("threshold : ", threshold);
        console.log("noOfShares : ", noOfShares);
    } 
    else if (threshold >= 100) {
        alert("The process will be very low if the number of required shares are greater than 100, please use a number lower than 100");
        document.getElementsByClassName("threshold")[0].innerHTML = 3;
        console.log("threshold : ", threshold);
        console.log("noOfShares : ", noOfShares);
    } 
    else {
        document.getElementsByClassName("threshold")[0].innerHTML = threshold;
        console.log("threshold : ", threshold);
        console.log("noOfShares : ", noOfShares);
    }
}
