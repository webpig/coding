function unique(arr) {
    const map = new Map(), res = []

    for (const val of arr) {
        if (!map.has(val)) {
            map.set(val, true)
            res.push(val)
        }
    }

    return res
}

const testArr = [1, 1, '1', '1', {}, {}, { a: 1 }, { a: 1 }, undefined, undefined, null, null, 0, NaN, NaN]
console.log(unique(testArr))

console.log([...new Set(testArr)])
