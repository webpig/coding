Array.prototype.add = function(val) {
    return [this.reduce((acc, cur) => acc += cur, val)]
}

Array.prototype.minus = function(val) {
    return [this.reduce((acc, cur) => acc += cur, 0) - val]
}

console.log(new Array(1).add(2).minus(1))

