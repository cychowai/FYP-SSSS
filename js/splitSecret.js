splitSecret = function () {
    //pass the shares here
    var noOfShares = document.getElementsByClassName("noOfShares")[0].value;
    //console.log("noOfShares : ", noOfShares);
    var secret = document.getElementsByClassName("secret")[0].value;
    //console.log("secret : ", secret);
    var threshold = document.getElementsByClassName("threshold")[0].value;
    //console.log("threshold : ", threshold);
    //TODO
    //split the secret into shares with noOfShares
    //https://qvault.io/cryptography/shamirs-secret-sharing/

    var result = 0n;
    for (let i = 0; i < secret.length; ++i) {
        result = result * 256n + BigInt(secret.charCodeAt(i));
    }
    //string->number, the link shows the allowed input(256 ASCII)
    //https://www.ascii-code.com/
    //console.log(result); //should be a number in BigInt
    var coeff = [result];
    for (let i = 1; i < threshold; ++i) {
        coeff.push(randCoeff(result));
    }
    var shares = [];
//9x+1->9x^2+x+2->9x^3......
//the var result represent f(x)
//and the secret, coeff[0], should be the last one
    for (let i = 1; i <= noOfShares; ++i) {
        var result = 0n;
    for (let j = coeff.length-1; j >=0; j--) {
        result = result * BigInt(i);
        result = BigInt(result) + coeff[j];
    }
        shares.push([i, result]);
    }
    //clear the previous output
    document.getElementById("shares").value="";
    for (let s of shares) {
        var text =  s[0] +"-" + BInt2Str(s[1]);
        //if someplace have done to store the value of x, below code can be used.
        //const text = "share "+ s[0] + "/" +noOfShares +": " + bitob64(s[1]);
        document.getElementById("shares").value += [text,"\n"];
    }
}

function BInt2Str(bi) {
    var bs = [];
    while (bi > 0n) {
        bs.unshift(String.fromCharCode(Number(bi % 256n)));
        bi = bi / 256n;
    }
    return btoa(bs.join(""));
}
function randCoeff(secret) {
    const P = 243527343255357844823222714101n;
    var count = 0;
    var temp = P;
    while (temp > 0n) {
        count += 1;
        //length
        temp /= 256n;
    }
    var arr = new Uint8Array(count);//0-255
    while (true) {
        crypto.getRandomValues(arr);
        //do not use math random here
        var b = 0n;
        for (let i = 0; i < count; ++i) {
            b = b * 256n + BigInt(arr[i]);
        }
        if (b < P) {
            return b;
        }
    }
}

