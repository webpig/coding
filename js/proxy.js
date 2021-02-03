const handler = {
  get: function(obj, prop) {
    console.log('A value has been accessed')
    return obj[prop]
  }
}

const initialObj = {
  id: 1,
  name: 'Foo, Bar'
}

const proxiedObj = new Proxy(initialObj, handler)

console.log(proxiedObj.name)
