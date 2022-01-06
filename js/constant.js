const defaultBits = 8;
const defaultMaxBits = 20;
const defaultMinBits = 3;
const defaultBase = 16;
const bytesPerChar = 2;
const maxBytesPerChar = 6;
const preGenPadding = new Array(1024).join("0");
const defaultSize = Math.pow(2, defaultBits);
const maxShares = defaultSize - 1;
const primitivePolynomials = [null, null, 1, 3, 3, 5, 3, 3, 29, 17, 9, 5, 83, 27, 43, 3, 45, 9, 39, 39, 9, 5, 3, 33, 27, 9, 71, 39, 9, 5, 83];
const primitive = primitivePolynomials[defaultBits];
var logs = [], exps = [], i, x = 1;
for (i = 0; i < defaultSize; i++) {
    exps[i] = x;
    logs[x] = i;
    x = x << 1;              // Left shift assignment
    if (x >= defaultSize) {
        x = x ^ primitive;   // Bitwise XOR assignment
        x = x & maxShares;  // Bitwise AND assignment
    }
}
const defaultLogs = logs;
const defaultExps = exps;