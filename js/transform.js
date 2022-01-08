function hexToStr(str) {
    var hexChars, out = "", len;

    hexChars = 2 * bytesPerChar;
    str = padLeft(str, hexChars);
    for (var i = 0, len = str.length; i < len; i += hexChars) {
        out = String.fromCharCode(parseInt(str.slice(i, i + hexChars), 16)) + out;
    }
    return out;
}

function strToHex(str) {
    var hexChars, max, out = "", neededBytes, num, len;

    hexChars = 2 * bytesPerChar;
    max = Math.pow(16, hexChars) - 1;
    for (var i = 0, len = str.length; i < len; i++) {
        num = str[i].charCodeAt();
        if (num > max) {
            neededBytes = Math.ceil(Math.log(num + 1) / Math.log(256));
        }
        out = padLeft(num.toString(16), hexChars) + out;
    }
    return out;
}

function hexToBin(str) {
    var bin = "", num;

    for (var i = str.length - 1; i >= 0; i--) {
        num = parseInt(str[i], 16);
        bin = padLeft(num.toString(2), 4) + bin;
    }
    return bin;
}

function binToHex(str) {
    var hex = "", num;

    str = padLeft(str, 4);
    for (var i = str.length; i >= 4; i -= 4) {
        num = parseInt(str.slice(i - 4, i), 2);
        hex = num.toString(16) + hex;
    }
    return hex;
}
