function regenerateSecret(shares) {
    var result = "";
    var x = [];
    var y = [];

    for (var i = 0; i < shares.length; i++) {
        var share = extractShare(shares[i]);

        if (x.indexOf(share.id) === -1) {
            x.push(share.id);
            var splitShare = splitStringToArray(hexToBin(share.data));
            for (var j = 0; j < splitShare.length; j++) {
                y[j] = y[j] || [];
                y[j][x.length - 1] = splitShare[j];
            }
        }
    }

    for (var i = 0; i < y.length; i++) {
        result = padLeft(LagrangeInterpolation(x, y[i]).toString(2)) + result;
    }

    return binToHex(result.slice(result.indexOf("1") + 1)); //remove the maker "1"
    //return binToHex(result);
}