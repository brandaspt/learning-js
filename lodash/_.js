let _ = {};

_.clamp = (num, lower, upper) => {
    lowerClampedValue = Math.max(num, lower);
    clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
}

_.inRange = (num, start, end) => {
    let newStart = start;
    let newEnd = end
    if (!end) {
        newStart = 0;
        newEnd = start;
    }
    if (start > end) {
        newStart = end;
        newEnd = start;
    }
    if (num < newStart || num >= newEnd) {
        return false;
    } else {
        return true;
    }

}

_.words = string => {
    return string.split(' ');
}

_.pad = (string, length) => {
    ammountOfPadding = length - string.length;
    let startPad = '';
    let endPad = '';
    for (let i = 1; i <= ammountOfPadding; i++ )
        if (i % 2 === 0) {
            startPad += ' ';
        } else {
            endPad += ' ';
        }
        return startPad + string + endPad;
}

_.has = (obj, key) => {
    return obj[key] ? true : false;
}

_.invert = obj => {
    let invObj = {};
    for (let key in obj) {
        invObj[obj[key]] = key;
    }
    return invObj;
}

_.findKey = (obj, predFunc) => {
    for (let key in obj) {
        if (predFunc(obj[key])) {
            return key;
        };
    }
}

_.drop = (array, num) => {
    let resultArray = array;
    num ? resultArray.splice(0, num) : resultArray.splice(0, 1);
    return resultArray;
}

_.dropWhile = (array, predFunc) => {
    let dropIndex = array.findIndex((element, index) => {
        return !predFunc(element, index, array);
    })
    let resultArray = _.drop(array, dropIndex);
    return resultArray;
}

_.chunk = (array, size) => {
    if (!size) {
        size = 1;
    }
    let resultArray = [];
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size);
        resultArray.push(chunk);
    }
    return resultArray;
}

// Do not write or modify code below this line.
module.exports = _;