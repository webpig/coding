function asyncToGenerator(generatorFunc) {
  return function() {
    const gen = generatorFunc.apply(this, arguments)

    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult

        try {
          generatorResult = gen[key](arg)
        } catch (e) {
          return reject(e)
        }

        const { value, done } = generatorResult

        if (done) {
          return reject(value)
        } else {
          return Promise.resolve(value).then((value) => {
            step('next', value)
          }, (err) => {
            step('throw', err)
          })
        }
      }

      step('next')
    })
  }
}

const getData = () => new Promise(resolve => setTimeout(() => resolve('data'), 1000))

// 这样的一个async函数 应该再1秒后打印data
async function test() {
  const data = await getData()

  console.log(data)
  return data
}

test()

// async函数会被编译成generator函数 (babel会编译成更本质的形态，这里我们直接用generator)
function* testG() {
  // await被编译成了yield
  const data = yield getData()
  console.log('data: ', data);
  const data2 = yield getData()
  console.log('data2: ', data2);
  return data + '123'
}

const testGAsync = asyncToGenerator(testG)
testGAsync().then(result => {
  console.log(result)
})
