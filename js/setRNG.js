

    function construct(bits, arr, radix, size) {
        var i = 0,
            len,
            str = "",
            parsedInt;

        if (arr) {
            len = arr.length - 1;
        }
        while (i < len || (str.length < bits)) {
            // convert any negative nums to positive with Math.abs()
            parsedInt = Math.abs(parseInt(arr[i], radix));
            str = str + padLeft(parsedInt.toString(2), size);
            i++;
        }
        str = str.substr(-bits);
        // return null so this result can be re-processed if the result is all 0's.
        if ((str.match(/0/g) || []).length === str.length) {
            return null;
        }
        return str;
    }

    function browserCryptoGetRandomValues(bits) {
        var elems,
            radix,
            size,
            str = null;
            radix = 10;
            size = 32;
            elems = Math.ceil(bits / 32);

        while (str === null) {
            str = construct(bits, window.crypto.getRandomValues(new Uint32Array(elems)), radix, size);
        }
        return str;
    }
