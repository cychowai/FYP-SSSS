function hexToStr(str) {
    var hexChars,
    out = "",
    i,
    len;

    if (typeof str !== "string") {
        alert("Input must be a hexadecimal string.");
    }
    bytesPerChar = bytesPerChar || bytesPerChar;
    if (typeof bytesPerChar !== "number" || bytesPerChar % 1 !== 0 || bytesPerChar < 1 || bytesPerChar > maxBytesPerChar) {
        alert("Bytes per character must be an integer between 1 and " + maxBytesPerChar + ", inclusive.");
    }
    hexChars = 2 * bytesPerChar;
    str = padLeft(str, hexChars);
    for (i = 0, len = str.length; i < len; i += hexChars) {
        out = String.fromCharCode(parseInt(str.slice(i, i + hexChars), 16)) + out;
    }
    return out;
}

function strToHex(str) {
    var hexChars,
    max,
    out = "",
    neededBytes,
    num,
    i,
    len;

    if (typeof str !== "string") {
        alert("Input must be a character string.");
    }
    if (!bytesPerChar) {
        bytesPerChar = bytesPerChar;
    }
    if (typeof bytesPerChar !== "number" || bytesPerChar < 1 || bytesPerChar > maxBytesPerChar || bytesPerChar % 1 !== 0) {
        alert("Bytes per character must be an integer between 1 and " + maxBytesPerChar + ", inclusive.");
    }
    hexChars = 2 * bytesPerChar;
    max = Math.pow(16, hexChars) - 1;
    for (i = 0, len = str.length; i < len; i++) {
        num = str[i].charCodeAt();
        if (isNaN(num)) {
            alert("Invalid character: " + str[i]);
        }
        if (num > max) {
            neededBytes = Math.ceil(Math.log(num + 1) / Math.log(256));
            alert("Invalid character code (" + num + "). Maximum allowable is 256^bytes-1 (" + max + "). To convert this character, use at least " + neededBytes + " bytes.");
        }
        out = padLeft(num.toString(16), hexChars) + out;
    }
    return out;
}

function hexToBin(str) {
    var bin = "",
        num,
        i;

    for (i = str.length - 1; i >= 0; i--) {
        num = parseInt(str[i], 16);
        if (isNaN(num)) {
            alert("Invalid hex character.");
        }
        bin = padLeft(num.toString(2), 4) + bin;
    }
    return bin;
}

function binToHex(str) {
    var hex = "",
        num,
        i;

    str = padLeft(str, 4);
    for (i = str.length; i >= 4; i -= 4) {
        num = parseInt(str.slice(i - 4, i), 2);
        if (isNaN(num)) {
            alert("Invalid binary character.");
        }
        hex = num.toString(16) + hex;
    }
    return hex;
}
