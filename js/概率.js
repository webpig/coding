function f() {
    const n = Math.random() * 10

    return n <= 2.1 ? 'a' : 'b'
}

function testF() {
    let i = 0, a = 0, b = 0

    while (i++ < 1000000) {
        const res = f()
        if (res === 'a') a++
        if (res === 'b') b++
    }

    console.log(a, b)
}

testF()

function g() {
    const str = f() + f()

    if (str === 'ab') {
        return 'c'
    } else if (str === 'ba') {
        return 'd'
    } else {
        return g()
    }
}

function testG() {
    let i = 0, c = 0, d = 0

    while (i++ < 1000000) {
        const res = g()
        if (res === 'c') c++
        if (res === 'd') d++
    }

    console.log(c, d)
}

testG()
