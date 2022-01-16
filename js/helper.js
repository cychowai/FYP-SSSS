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

function padLeft(str, multipleOfBits) {
    var missing;

    if (multipleOfBits === 0 || multipleOfBits === 1) {
        return str;
    }
    multipleOfBits = multipleOfBits || defaultBits;
    if (str) {
        missing = str.length % multipleOfBits;
    }
    if (missing) {
        return (preGenPadding + str).slice(-(multipleOfBits - missing + str.length));
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
        //random using cyrpto
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
            if (product !== -1) { // fix for a zero product term
                sum = sum ^ defaultExps[product];
            }
        }
    }
    return sum;
}
