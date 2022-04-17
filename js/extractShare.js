function extractShare(share) {
    var bits, max, regexStr, shareComponents;
    var obj = {};
    var id, idLen;

    bits = parseInt(share.substr(0, 1), 36); 
    max = Math.pow(2, bits) - 1;
    idLen = (Math.pow(2, bits) - 1).toString(defaultBase).length;
    //regex used here
    regexStr = "^([a-kA-K3-9]{1})([a-fA-F0-9]{" + idLen + "})([a-fA-F0-9]+)$";
    shareComponents = new RegExp(regexStr).exec(share);

    //logging
    console.log(shareComponents[0]);
    console.log(shareComponents[1]);
    console.log(shareComponents[2]);
    console.log(shareComponents[3]);

    if (shareComponents) {
        id = parseInt(shareComponents[2], defaultBase);
    }
    if (shareComponents && shareComponents[3]) {
        obj.bits = bits;
        obj.id = id;
        obj.data = shareComponents[3];
        return obj;
    }   
}