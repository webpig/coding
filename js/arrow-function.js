const name = 'Jack'

const arrowFunc = () => {
    console.log(arguments)
    console.log(this.name)
}

function normalFunc() {
    console.log(arguments)
    console.log(this.name)

    const arrowFunc = () => {
        console.log(arguments)
    }

    arrowFunc()
}

// 箭头函数没有arguments
arrowFunc(1)
normalFunc(1)

// 箭头函数没有prototype
console.log(arrowFunc.prototype)
console.log(normalFunc.prototype)

// 箭头函数没有this
arrowFunc()
normalFunc()

arrowFunc.call({name: 'Bob'})
arrowFunc.apply({name: 'Bob'})
arrowFunc.bind({name: 'Bob'})()

normalFunc.call({name: 'Bob'})
normalFunc.apply({name: 'Bob'})
normalFunc.bind({name: 'Bob'})()
