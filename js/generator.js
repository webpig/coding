function* createIterator(items) {
    // yield 1;
    // yield 2;
    // yield 3;
    for (let i = 0; i < items.length; i++) {
        yield items[i]
    }
}

// let iterator = createIterator([1, 2, 3])

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

let values = [1, 2, 3];
let iterator = values[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let collection = {
    items: [],
    *[Symbol.iterator]() {
        for (const item of this.items) {
            yield item
        }
    }
}

collection.items = [1, 2, 3]

for (const x of collection) {
    console.log(x)
}
