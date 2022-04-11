//base 16 to string
function hexToStr(str) {
    var out = "";
    //2 bytes in heximal for storing each characters 
    var hexChars = 2 * bytesPerChar;
    str = padLeft(str, hexChars);
    for (var i = 0; i < str.length; i += hexChars) {
        //convert to string from charcode
        out = String.fromCharCode(parseInt(str.slice(i, i + hexChars), 16)) + out;
    }
    return out;
}

//base string to 16
function strToHex(str) {
    var out = "";
    //2 bytes in heximal for storing each characters
    var hexChars = 2 * bytesPerChar;
    for (var i = 0; i < str.length; i++) {
        var num = str[i].charCodeAt();
        out = padLeft(num.toString(16), hexChars) + out;
    }
    return out;
}

//base 16 to base 2
function hexToBin(str) {
    var bin = "";
    //start with the last bit which is the last digit of the value in heximal
    for (var i = str.length - 1; i >= 0; i--) {
        //parse to integer of base 16 
        var num = parseInt(str[i], 16); 
        //change to base 2 by toString(2)
        //add padding on left to make it become 4 bits long
        //sum up the binary string
        bin = padLeft(num.toString(2), 4) + bin; 
    }
    return bin;
}

//base 2 to base 16
function binToHex(str) {
    var hex = "";
    //add padding on left to make it become at least 4 bits long
    str = padLeft(str, 4);
    //start with the last 4 bits and 4 bits as a group each time
    for (var i = str.length; i >= 4; i -= 4) { 
        //parse 4 bits to integer of base 2
        var num = parseInt(str.slice(i - 4, i), 2); 
        hex = num.toString(16) + hex;
    }
    return hex;
}
