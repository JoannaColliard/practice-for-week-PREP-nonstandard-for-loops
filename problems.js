function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    if (arr.length === 0) {
        return [];
    } else {
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (i % 2 !== 0) {
                newArr.push(arr[i]);
            }
        }

        return newArr;
    }
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    if (arr.length === 0) {
        return [];
    } else {
        let newArr = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            if (i % 2 !== 0) {
                newArr.push(arr[i]);
            }
        }

        return newArr;
    }
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    if (arr.length === 0) {
        return [];
    } else {
        let newArr = [];

        for (let i = 1; i < arr.length; i++) {
            let isPower2 = false;
            let n = Math.log2(i);

            if (Number.isInteger(n) && n >= 0) {
                isPower2 = true;
            }

            if (isPower2) {
                newArr.push(arr[i]);
            }
        }

        return newArr;
    }
}

function nthPower(arr, n) {
    // Return an array containing all elements at indices that are powers of n
    function isPowerOfN(x, n) {
        // Checks if x is a power of n
        if (x < 1) {
            return false;
        }
        const logN = Math.log(x) / Math.log(n);
        const tolerance = 1e-12;
        return Math.abs(logN - Math.round(logN)) < tolerance;
    }

    if (arr.length === 0) {
        return [];
    } else {
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (isPowerOfN(i, n)) {
                newArr.push(arr[i])
            }
        }

        return newArr;
    }
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    if (arr.length === 0) {
        return [];
    } else {
        let newArr = [];
        let middleIndex;

        if (arr.length % 2 === 0) {
            middleIndex = (arr.length / 2) - 1;
            newArr = arr.slice(0, middleIndex + 1);
        } else if (arr.length % 2 !== 0) {
            middleIndex = Math.floor(arr.length / 2);
            newArr = arr.slice(0, middleIndex + 1);
        }

        return newArr;
    }
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    if (arr.length === 0 || arr.length === 1) {
        return [];
    } else {
        let newArr = [];
        let middleIndex;

        if (arr.length % 2 === 0) {
            middleIndex = (arr.length / 2) - 1;
            newArr = arr.slice(middleIndex + 1, arr.length);
        } else if (arr.length % 2 !== 0) {
            middleIndex = Math.floor(arr.length / 2);
            newArr = arr.slice(middleIndex + 1, arr.length);
        }

        return newArr;
    }
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
