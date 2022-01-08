function regenerateSecret(shares) {
    var len, len2;
    var result = "", share, splitShare;
    var x = [];
    var y = [];

    for (var i = 0, len = shares.length; i < len; i++) {
        share = extractShareComponents(shares[i]);

        if (x.indexOf(share.id) === -1) {
            x.push(share.id);
            splitShare = splitNumStringToIntArray(hexToBin(share.data));
            for (var j = 0, len2 = splitShare.length; j < len2; j++) {
                y[j] = y[j] || [];
                y[j][x.length - 1] = splitShare[j];
            }
        }
    }

    for (var i = 0, len = y.length; i < len; i++) {
        result = padLeft(lagrange(0, x, y[i]).toString(2)) + result;
    }
    
    //return binToHex(result.slice(result.indexOf("1") + 1));
    //return binToHex(result.slice(1));
    return binToHex(result);
}