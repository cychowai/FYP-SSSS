function extractShare(share) {
    var obj = {};
    var bits = parseInt(share.substr(0, 1), 36); 
    var idLen = (Math.pow(2, bits) - 1).toString(defaultBase).length;

    //regex used here
    var regexStr = "^([a-kA-K3-9]{1})([a-fA-F0-9]{" + idLen + "})([a-fA-F0-9]+)$";
    var shareComponents = new RegExp(regexStr).exec(share);

    if (shareComponents) {
        var id = parseInt(shareComponents[2], defaultBase);

        if (shareComponents[3]) {
            obj.bits = bits;
            obj.id = id;
            obj.data = shareComponents[3];
            return obj;
        }  
    }
}