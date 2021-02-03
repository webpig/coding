// const handler = {
//   get: function(obj, prop) {
//     console.log('A value has been accessed')
//     return obj[prop]
//   },
//   set: function(obj, prop, value) {
//     console.log(`${prop} is being set to ${value}`)
//   }
// }

// const initialObj = {
//   id: 1,
//   name: 'Foo, Bar'
// }

// const proxiedObj = new Proxy(initialObj, handler)

// console.log(proxiedObj.name)

// proxiedObj.age = 24

// const person = {
//   id: 1,
//   name: 'Foo Bar'
// }

// const handler = {
//   get(obj, prop) {
//     if (prop === 'id') {
//       throw new Error('Cannot access private properties!')
//     } else {
//       return obj[prop]
//     }
//   },
//   set(obj, prop, value) {
//     if (prop === 'age' && typeof value !== 'number') {
//       throw new Error('Age is number type')
//     } else {
//       obj[prop] = value
//     }
//   }
// }

// const proxyPerson = new Proxy(person, handler)

// // console.log(proxyPerson.id)

// proxyPerson.age = 12

// console.log(proxyPerson)

const target = {
  name: 'target',
  value: 42
}

const handler = {
  get(target, key, receiver) {
    if (!(key in receiver)) {
      throw new Error('不存在该属性')
    }

    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    if (!target.hasOwnProperty(key)) {
      if (typeof value !== number) {
        throw new Error('属性只能为数字类型')
      }
    }

    return Reflect.set(target, key, value, receiver)
  },
  has(target, key) {
    if (key === 'name') {
      return false
    } else {
      return Reflect.has(target, key)
    }
  },
  deleteProperty(target, key) {
    if (key === 'name') {
      return false
    } else {
      return Reflect.deleteProperty(target, key)
    }
  }
}

const proxy = new Proxy(target, handler)

// proxy.name = 'target1'
// console.log(proxy.name)

// proxy.count = 1
// console.log(proxy)

// console.log(proxy.nme)

// console.log('toString' in proxy)
// console.log('name' in proxy)

// Object.defineProperty(target, 'name', {
//   configurable: true
// })

console.log('value' in proxy)

let result1 = delete proxy.value
console.log(result1)

console.log('value' in proxy)

let result2 = delete proxy.name
console.log(result2)

console.log('name' in proxy)
