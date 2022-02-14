function splitStringToArray(str, padLength) {
    var parts = [];
    //padlength variable allows us to set the padding manually
    if (padLength) {
        str = padLeft(str, padLength);
    }
    //split the string into different pieces by array using default bits
    //parse to base 2
    for (var i = str.length; i > defaultBits; i -= defaultBits) {
        parts.push(parseInt(str.slice(i - defaultBits, i), 2));
    }
    //last case for remaining length is not multiple of default bits
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

function horner(x, coeffs) {
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
    var elems = Math.ceil(bits / 32); //round up to integer with bits divided by 32

    while (!str) {
        //construct random str using cyrpto
        //crypto better than Math.random : https://github.com/2627500295/blog/blob/master/%E6%96%87%E7%AB%A0/%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/%E5%BC%80%E5%8F%91%E8%AF%AD%E8%A8%80/TypeScript/%E4%BD%BF%E7%94%A8%20window.crypto.getRandomValues%20%E5%8F%96%E4%BB%A3%E4%B8%8D%E5%AE%89%E5%85%A8%E7%9A%84%20Math.random.md
        //uint32array : https://vimsky.com/zh-tw/examples/usage/javascript-uint32array-from-method.html
        //getRandomValues in crypto : https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
        str = construct(bits, window.crypto.getRandomValues(new Uint32Array(elems)), base, size);
    }
    return str;
}

function LagrangeInterpolation(x, y) {
    var sum = 0; //sum is 0 if a zero product term exists
    var product;
    for (var i = 0; i < x.length; i++) {
        if (y[i]) {
            product = defaultLogs[y[i]];
            for (var j = 0; j < x.length; j++) {
                if (i !== j) {
                    if (point === x[j]) {
                        product = -1; // fix for a zero product term
                        break;
                    }
                    //x = 0
                    //+ maxShares to ensure the product after mod is positive
                    product = (product + defaultLogs[0 ^ x[j]] - defaultLogs[x[i] ^ x[j]] + maxShares) % maxShares;
                }
            }
            //case for excepting for i = j condition in lagrange interpolation
            if (product !== -1) { 
                //XOR
                sum = sum ^ defaultExps[product];
            }
        }
    }
    return sum;
}
