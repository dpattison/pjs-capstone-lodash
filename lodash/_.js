let _ = {

    clamp: function (number, lower, upper) {
        if (number < lower) {
            return lower;
        } else if (number > upper) {
            return upper;
        }
        return number;
    },

    inRange: function (number, start, end) {
        if (typeof end === 'undefined') {
            end = start;
            start = 0;
        }
        if (start > end) {
            end = [start, start = end][0];
        }
        if (number >= start && number < end) {
            return true;
        } else return false;

    },

    words: function (string, splitter = ' ') {
        return string.split(splitter);
    },

    pad: function (str, length) {
        if (str.length >= length) {
            return str;
        }
        leftPad = Math.floor((length - str.length) / 2);
        rightPad = Math.ceil((length - str.length) / 2);
        return ' '.repeat(leftPad) + str + ' '.repeat(rightPad);
    },

    has: function (obj, key) {
        return (obj[key] != undefined)
    },

    invert: function (obj) {
        var retObj = {};
        for (let key in obj) {
            retObj[obj[key]] = key;
        }
        return retObj;
    },

    findKey: function (obj, func) {
        for (let key in obj) {
            if (func(obj[key])) {
                return key;
            }
        } return undefined;
    },

    drop: function (arr, num = 1) {
        arr.splice(0, num);
        return arr;
    },

    dropWhile: function (arr, predicate) {
        let dropNumber = arr.findIndex(function (element, index) {
            return !predicate(element, index, arr)
        });
        return this.drop(arr, dropNumber);
    },

    chunk: function (array, size = 1) {
        let arrayChunks = [];
        for (let i = 0; i < array.length; i + size) {
            let arrayChunk = array.splice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    },
}
// Do not write or modify code below this line.
module.exports = _;
