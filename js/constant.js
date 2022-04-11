const MAX_VALUE = 255; 
const MIN_VALUE = 2;
const defaultThreshold = 3;
const defaultShares = 5;

const defaultBits = 8; //8 bits as default
const defaultBase = 16;
const bytesPerChar = 2;
const maxBytesPerChar = 6;
const minPadLength = 128;
const maxPadLength = 1024; 

//array used for padding 0 in transforming bases
const preGenPadding = new Array(1024).join("0");
const defaultSize = Math.pow(2, defaultBits); //2^8
const maxShares = defaultSize - 1;

//creating irreducible/primitive polynomail
const primitivePolynomials = [null, null, 1, 3, 3, 5, 3, 3, 29, 17, 9, 5, 83, 27, 43, 3, 45, 9, 39, 39, 9, 5, 3, 33, 27, 9, 71, 39, 9, 5, 83];
const primitive = primitivePolynomials[defaultBits]; //29

//creating 2 arrays, one is for generating shares, one is for searching the secret
var logs = [], exps = [], i, x = 1;
for (i = 0; i < defaultSize; i++) {
    exps[i] = x;
    logs[x] = i;
    //left shift
    x = x << 1;
    if (x >= defaultSize) {
        //XOR: bit addition and subtraction
        x = x ^ primitive;
        //bitwise AND
        //1 1 -> 1
        //0 1 -> 1
        //1 1 -> 1
        //0 0 -> 0
        x = x & maxShares;
    }
}
const defaultLogs = logs;
const defaultExps = exps;