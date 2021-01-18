function task1() {
    console.log(1)
}

const promise = new Promise((resolve) => {
    resolve(2)
})

function task2() {
    // promise.then(res => {
    //     console.log(res)
    // })
    return new Promise((resolve, reject) => {
        setTieout(() => {
            console.log(2)
            resolve('2')
        }, 1000)
    })
}

function task3() {
    console.log(3)
}


async function foo(taskArr) {
    let i = 0
    while (i < taskArr.length) {
        try {
            await taskArr[i++]()
        } catch (e) {
            console.log(e)
            // foo(taskArr.slice(i + 1))
        } finally {
            // foo(taskArr.slice(i + 1))
        }
    }
}

foo([task1, task2, task3])
