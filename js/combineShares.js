combineShares = function () {
    //pass the secret here
    var threshold = document.getElementsByClassName("threshold")[0].value;
    //console.log("threshold : ", threshold);
    var shares = document.getElementsByClassName("shares")[0].value;
    //console.log("shares : ", shares);
    //todo
    //may be add some checking here once the algorithm are stablize
    var s = shares.split(/[\s ,]+/);
    //1-AmvnfoksGnAadN4ACA==
    //2-.........
    var share = takeShare(s);
    var secret = [0n, 1n];
    for (let i = 0; i < share.length; ++i) {
        var c0 = [1n, 1n];
        for (let j = 0; j < share.length; ++j) {
            if (i !== j) {
                const n = -share[j][0];
                const d = share[i][0] - share[j][0];
                if (d > 0) {
                    c0 = multBigR(c0, [n, d]);
                } else {
                    c0 = multBigR(c0, [-n, -d]);
                }
            }
        }
    var th = multBigR([share[i][1],1n], c0);
    const den = secret[1] * th[1] / ComFactor(secret[1], th[1]);
    const num = (secret[0] * den / secret[1]) + (th[0] * den / th[1]);
    const cd = ComFactor(den, BigMathAbs(num));
    secret = [num / cd, den / cd];
        
    }
    console.log("secret in no:",secret);
    text = atob(BInt2Str(secret[0]));
    document.getElementById("showSecret").value ="";
    document.getElementById("showSecret").value += [text];
    //combine shares into secret with no of shares >= threshold 
}

function takeShare(s){
    var share = []
    for(let i = 0;i < s.length -1; i++){
        var temp = s[i].split("-");
        temp[1] = atob(temp[1]);
        var result = 0n;
        for (let i = 0; i < temp[1].length; ++i) {
            result = result * 256n + BigInt(temp[1].charCodeAt(i));
        }
        temp[1]=result;
        console.log(temp[1],"is ",BigInt(parseInt(temp[0])))
        share.push([BigInt(parseInt(temp[0])), temp[1]]);

    }
    return share;
}
function multBigR(a, b) {
    const d = a[1] * b[1];
    const n = a[0] * b[0];
    const cd = ComFactor(d, BigMathAbs(n));
    return [n / cd, d / cd];
}

function BigMathAbs(n) {
    if (n >= 0n) {
        return n;
    } else {
        return -n;
    }
}
function ComFactor(a, b) {
    while (b != 0n) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}