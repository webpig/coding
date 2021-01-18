function curry(fn, len = fn.length) {
    return _curry.call(this, fn, len)
}

function _curry(fn, len, ...outerArgs) {
    return function(...innerArgs) {
        const args = [...outerArgs, ...innerArgs]

        if (args.length < len) {
            return _curry(fn, len, ...args)
        } else {
            return fn.apply(this, args)
        }
    }
}


const add = curry(function(a, b, c, d) {
    console.log(a + b + c + d)
})

add(1)(2)(3)(4)
add(1, 2, 3)(4)
add(1, 2)(3, 4)
