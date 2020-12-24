function myNew(constructor, ...args) {
    const obj = {}

    obj.__proto__ = constructor.prototype

    const res = constructor.apply(obj, args)

    return isObject(res) ? res : obj
}

function isObject(target) {
    const type = typeof target
    return target !== null && (type === 'object' || type === 'function')
}


function Person(name, age) {
    this.name = name
    this.age = age
}

const p = new Person('Jack', 18)
console.log(p, p.__proto__ === Person.prototype)

const p2 = myNew(Person, 'Jack', 18)
console.log(p2, p.__proto__ === Person.prototype)
