function splitNumStringToIntArray(str, padLength) {
    var parts = [],
        i;

    if (padLength) {
        str = padLeft(str, padLength);
    }
    for (i = str.length; i > defaultBits; i -= defaultBits) {
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
    if (multipleOfBits && multipleOfBits > 1024) {
        alert("Padding must be multiples of no larger than 1024 bits.");
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

function getShares(secret, numShares, threshold) {
    var shares = [],
        coeffs = [secret],
        i,
        len;

    for (i = 1; i < threshold; i++) {
        coeffs[i] = parseInt(browserCryptoGetRandomValues(defaultBits), 2); //todo
    }
    for (i = 1, len = numShares + 1; i < len; i++) {
        shares[i - 1] = {
            x: i,
            y: horner(i, coeffs)
        };
    }
    return shares;
}

function horner(x, coeffs) {
    var logx = defaultLogs[x],
        fx = 0,
        i;

    for (i = coeffs.length - 1; i >= 0; i--) {
        if (fx !== 0) {
            fx = defaultExps[(logx + defaultLogs[fx]) % maxShares] ^ coeffs[i];
        } else {
            fx = coeffs[i];
        }
    }
    return fx;
}

function constructPublicShareString(bits, id, data) {
    var bitsBase36,
        idHex,
        idMax,
        idPaddingLen,
        newShareString;

    id = parseInt(id, defaultBase);
    bits = parseInt(bits, 10) || defaultBits;
    bitsBase36 = bits.toString(36).toUpperCase();
    idMax = Math.pow(2, bits) - 1;
    idPaddingLen = idMax.toString(defaultBase).length;
    idHex = padLeft(id.toString(defaultBase), idPaddingLen);
    if (typeof id !== "number" || id % 1 !== 0 || id < 1 || id > idMax) {
        alert("Share id must be an integer between 1 and " + idMax + ", inclusive.");
    }
    newShareString = bitsBase36 + idHex + data;
    return newShareString;
}

function construct(bits, arr, radix, size) {
    var i = 0,
        len,
        str = "",
        parsedInt;

    if (arr) {
        len = arr.length - 1;
    }
    while (i < len || (str.length < bits)) {
        // convert any negative nums to positive with Math.abs()
        parsedInt = Math.abs(parseInt(arr[i], radix));
        str = str + padLeft(parsedInt.toString(2), size);
        i++;
    }
    str = str.substr(-bits);
    // return null so this result can be re-processed if the result is all 0's.
    if ((str.match(/0/g) || []).length === str.length) {
        return null;
    }
    return str;
}

function browserCryptoGetRandomValues(bits) {
    var elems,
        radix,
        size,
        str = null;
        radix = 10;
        size = 32;
        elems = Math.ceil(bits / 32);

    while (str === null) {
        str = construct(bits, window.crypto.getRandomValues(new Uint32Array(elems)), radix, size);
    }
    return str;
}