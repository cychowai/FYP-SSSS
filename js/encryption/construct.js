function construct(bits, arr, base, size) {
    var str = ""; 

    for (var i = 0; i < arr.length - 1 || (str.length < bits); i++) {
        var parsedInt = Math.abs(parseInt(arr[i], base)); //must positive
        str += padLeft(parsedInt.toString(2), size);
    }
    str = str.substr(-bits);
    //reconstruct if all are 0
    if ((str.match(/0/g) || []).length === str.length) {
        return null;
    }

    return str;
}

function constructShare(bits, id, data) {
    id = parseInt(id, defaultBase); //parse to the default base
    bits = parseInt(bits, 10) || defaultBits; //parse the bits to base 10 if no parse it with default bits number
    var bitsBase36 = bits.toString(36).toUpperCase();
    var idMax = Math.pow(2, bits) - 1;
    var idPaddingLen = idMax.toString(defaultBase).length;
    var idHex = padLeft(id.toString(defaultBase), idPaddingLen);
    var newShareString = bitsBase36 + idHex + data;
    
    return newShareString;
}
