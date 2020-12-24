// ES5
function Singleton(name) {
    this.name = name
}

Singleton.prototype.getName = function() {
    console.log(this.name)
}

Singleton.getInstance = (function() {
    var instance = null
    return function(name) {
        if (!instance) {
            instance = new Singleton(name)
        }
        return instance
    }
}())

const a = Singleton.getInstance('a')
const b = Singleton.getInstance('b')

a.getName()
b.getName()
console.log(a === b)


// ES6
class Singleton {
    constructor(name) {
        this.name = name
    }

    static getInstance(name) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(name)
        }
        return Singleton.instance
    }

    getName() {
        console.log(this.name)
    }
}

const c = Singleton.getInstance('c')
const d = Singleton.getInstance('d')

c.getName()
d.getName()
console.log(c === d)
