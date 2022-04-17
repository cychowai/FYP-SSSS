const MAX_VALUE = 255; //2^8
const MIN_VALUE = 2;
const defaultThreshold = 3;
const defaultShares = 5;

const defaultBits = 8; //^8
const defaultBase = 16;
const bytesPerChar = 2;
const maxBytesPerChar = 6;
const minPadLength = 128;
const maxPadLength = 1024; 

const preGenPadding = new Array(1024).join("0");
const defaultSize = Math.pow(2, defaultBits);
const maxShares = defaultSize - 1;

const primitivePolynomials = [null, null, 1, 3, 3, 5, 3, 3, 29, 17, 9, 5, 83, 27, 43, 3, 45, 9, 39, 39, 9, 5, 3, 33, 27, 9, 71, 39, 9, 5, 83];
const primitive = primitivePolynomials[defaultBits]; //GF(2^8)

var logs = [], exps = [], i, x = 1;
for (i = 0; i < defaultSize; i++) {
    exps[i] = x;
    logs[x] = i;
    x = x << 1;
    if (x >= defaultSize) {
        x = x ^ primitive;
        x = x & maxShares;
    }
}
const defaultLogs = logs;
const defaultExps = exps;
