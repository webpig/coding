// function task1() {
//     console.log(1)
// }
//
// const promise = new Promise((resolve) => {
//     resolve(2)
// })
//
// function task2() {
//     // promise.then(res => {
//     //     console.log(res)
//     // })
//     return new Promise((resolve, reject) => {
//         setTieout(() => {
//             console.log(2)
//             resolve('2')
//         }, 1000)
//     })
// }
//
// function task3() {
//     console.log(3)
// }
//
//
// async function foo(taskArr) {
//     let i = 0
//     while (i < taskArr.length) {
//         try {
//             await taskArr[i++]()
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }
//
// foo([task1, task2, task3])


function A() {
    // console.log('A')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('A')
            resolve()
        }, 1000)
    })
}

function B() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('B')
            resolve()
        }, 1000)
    })
}

function C() {
    // console.log('C')
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('C')
            resolve()
        }, 1000)
    })
}

function D() {
    console.log('D')
}

async function foo(tasks) {
    let i = 0
    while (i < tasks.length) {
        try {
            if (Array.isArray(tasks[i])) {
                const promiseArr = tasks[i].map(task => new Promise((resolve) => resolve(task())))
                await Promise.allSettled(promiseArr)
            } else {
                await tasks[i]()
            }
        } catch (e) {
            console.error(e)
        } finally {
            i++
        }
    }
}

// foo([ A, [ B, C ], D ])

const delay = (tag, time) =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log(tag)
            resolve()
        }, time)
    })
// A,B,C,D as normal func
const runPromisesInSeries = (ps) =>
    ps.reduce((p, next) => p.then(next), Promise.resolve())
const promiseSeries = [
    () => delay("A", 1000),
    () => Promise.all([delay("B", 1000), delay('C', 0)]),
    () => delay("D", 0),
]
runPromisesInSeries(promiseSeries)
