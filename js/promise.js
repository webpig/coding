// function Promise(executor) {
//     this.state = 'pending'
//     this.value = null
//     this.reason = null
//     this.onFulfilledQueue = []
//     this.onRejectedQueue = []
//
//     const resolve = value => {
//         if (value instanceof Promise) {
//             return value.then(resolve, reject)
//         }
//
//         setTimeout(() => {
//             if (this.state === 'pending') {
//                 this.value = value
//                 this.state = 'fulfilled'
//             }
//
//             this.onFulfilledQueue.forEach(fn => fn(this.value))
//         })
//     }
//
//     const reject = reason => {
//         setTimeout(() => {
//             if (this.state === 'pending') {
//                 this.reason = reason
//                 this.state = 'rejected'
//             }
//
//             this.onRejectedQueue.forEach(fn => fn(this.reason))
//         })
//     }
//
//     try {
//         executor(resolve, reject)
//     } catch (e) {
//         reject(e)
//     }
// }
//
// Promise.prototype.then = function(onFulfilled , onRejected) {
//     let promise2
//
//     if (this.state === 'fulfilled') {
//         return promise2 = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 try {
//                     const result = onFulfilled(this.value)
//                     resolve(result)
//                 } catch (e) {
//                     reject(e)
//                 }
//             })
//         })
//     }
//
//     if (this.state === 'rejected') {
//         return promise2 = new Promise((resolve, reject) => {
//             try {
//                 const result = onRejected(this.value)
//                 reject(result)
//             } catch (e) {
//                 reject(e)
//             }
//         })
//     }
//
//     if (this.state === 'pending') {
//         return promise2 = new Promise((resolve, reject) => {
//             this.onFulfilledQueue.push(() => {
//                 try {
//                     const result = onFulfilled(this.value)
//                     resolve(result)
//                 } catch (e) {
//                     reject(e)
//                 }
//             })
//
//             this.onRejectedQueue.push(() => {
//                 try {
//                     const result = onRejected(this.reason)
//                     resolve(result)
//                 } catch (e) {
//                     reject(e)
//                 }
//             })
//         })
//     }
// }
//
// const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//         resolve('data')
//     // }, 1000)
//     // reject('error')
// })
//
// promise.then(data => {
//     console.log('1', data)
// }, error => {
//     console.log('got error from promise', error)
// })
//
// promise.then(data => {
//     console.log('2', data)
// })
//
// console.log(1)
//
// Promise.resolve = function(value) {
//     return new Promise((resolve, reject) => {
//         resolve(value)
//     })
// }
//
// Promise.reject = function(reason) {
//     return new Promise((resolve, reject) => {
//         reject(reason)
//     })
// }
//
// Promise.all = function(promiseArr) {
//     return new Promise((resolve, reject) => {
//         try {
//             const result = []
//             let i = 0
//
//             for (let promiseItem of promiseArr) {
//                 if (!(promiseItem instanceof Promise)) {
//                     promiseItem = Promise.resolve(promiseItem)
//                 }
//
//                 promiseItem.then(data => {
//                     result[i++] = data
//
//                     if (result.length === promiseArr.length) {
//                         resolve(result)
//                     }
//                 }, reject)
//             }
//         } catch (e) {
//             reject(e)
//         }
//     })
// }
//
// Promise.race = function(promiseArr) {
//     return new Promise((resolve, reject) => {
//         try {
//             for (let promiseItem of promiseArr) {
//                 if (!(promiseItem instanceof Promise)) {
//                     promiseItem = Promise.resolve(promiseItem)
//                 }
//
//                 promiseItem.then(resolve, reject)
//             }
//         } catch (e) {
//             reject(e)
//         }
//     })
// }
//
Promise.prototype.finally = function(onFinally) {
    return this.then(
        value => Promise.resolve(onFinally()).then(() => value),
        reason => Promise.resolve(onFinally()).then(() => { throw reason })
    )
}

let promiseTest = new Promise((resolve, reject) => {
    reject('data')
})

promiseTest
    .then(res => console.log('res', res))
    .catch(err => console.log('err', err))
    .finally(() => console.log(1))
//
// Promise.all([1, 2, 3]).then(res => console.log(res), (err) => console.log(err))
// Promise.race([1, 2, 3]).then(res => console.log(res), (err) => console.log(err))
