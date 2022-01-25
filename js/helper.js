function splitStringToArray(str, padLength) {
    var parts = [];

    if (padLength) {
        str = padLeft(str, padLength);
    }
    for (var i = str.length; i > defaultBits; i -= defaultBits) {
        parts.push(parseInt(str.slice(i - defaultBits, i), 2));
    }
    parts.push(parseInt(str.slice(0, i), 2));
    return parts;
}

//filling bits when changing base for string with 
function padLeft(str, multipleOfBits) {
    var missingBits;
    //no padding needed for case 0 or 1
    if (multipleOfBits === 0 || multipleOfBits === 1) {
        return str;
    }
    //calculating the missing bits needed for filling on left
    if (str) {
        missingBits = multipleOfBits - str.length % multipleOfBits;
    }
    //adding padding with missing bits on the left of the string
    if (missingBits) {
        //pre-generated padding : an array of "0" for adding up bits
        //'-' use for slice text from the rightmost with missing bits + string
        return (preGenPadding + str).slice(-(missingBits + str.length));
    }
    return str;
}

function getRoots(x, coeffs) {
    var logx = defaultLogs[x];
    var fx = 0;

    for (var i = coeffs.length - 1; i >= 0; i--) {
        if (fx !== 0) {
            fx = defaultExps[(logx + defaultLogs[fx]) % maxShares] ^ coeffs[i];
        } else {
            fx = coeffs[i];
        }
    }
    return fx;
}

//use cyrpto in browser better than Math.random
//https://developer.mozilla.org/en-US/docs/Web/API/Crypto
function getRandomValues(bits) {
    var str = null; 
    var base = 10; 
    var size = 32; 
    var elems = Math.ceil(bits / 32);

    while (!str) {
        //construct random str using cyrpto
        str = construct(bits, window.crypto.getRandomValues(new Uint32Array(elems)), base, size);
    }
    return str;
}

function setRange(point, x, y) {
    var sum = 0; //sum is 0 if a zero product term exists
    var len, product;

    for (var i = 0, len = x.length; i < len; i++) {
        if (y[i]) {
            product = defaultLogs[y[i]];
            for (var j = 0; j < len; j++) {
                if (i !== j) {
                    if (point === x[j]) {
                        product = -1; // fix for a zero product term
                        break;
                    }
                    product = (product + defaultLogs[point ^ x[j]] - defaultLogs[x[i] ^ x[j]] + maxShares) % maxShares;
                }
            }
            //case for fixing for a zero product term
            if (product !== -1) { 
                sum = sum ^ defaultExps[product];
            }
        }
    }
    return sum;
}
