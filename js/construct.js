function constructShare(bits, id, data) {
    var bitsBase36, idHex, idMax, idPaddingLen, newShareString;

    id = parseInt(id, defaultBase);
    bits = parseInt(bits, 10) || defaultBits;
    bitsBase36 = bits.toString(36).toUpperCase();
    idMax = Math.pow(2, bits) - 1;
    idPaddingLen = idMax.toString(defaultBase).length;
    idHex = padLeft(id.toString(defaultBase), idPaddingLen);
    newShareString = bitsBase36 + idHex + data;
    return newShareString;
}

function construct(bits, arr, base, size) {
    var len, parsedInt;
    var str = "";

    if (arr) {
        len = arr.length - 1;
    }
    for (var i = 0; i < len || (str.length < bits); i++) {
        parsedInt = Math.abs(parseInt(arr[i], base)); //must positive
        str += padLeft(parsedInt.toString(2), size);
    }
    str = str.substr(-bits);
    //reconstruct if all 0
    if ((str.match(/0/g) || []).length === str.length) {
        return null;
    }
    return str;
}