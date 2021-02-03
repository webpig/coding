let regex = /^[0-9]{4}-(0[1-9]|[1][0-2])-(0|[1-9]|[12][0-9]|3[01])$/

console.log(regex.test('2020-01-22'))

regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n]+\\)*([^\\:*<>|"?\r\n/]+)?$/

console.log(regex.test('F:\\study\\javascript\\regex\\regular expression.pdf'))
console.log(regex.test('F:\\study\\javascript\\regex'))
console.log(regex.test('F:\\study\\javascript'))
console.log(regex.test('F:\\'))

regex = /id=".[^"]*"/

const string = '<div id="container" class="main"></div>'

console.log(string.match(regex)[0])

console.log('<div>{{name}}</div>'.match(/{{.+}}/))

const template = '<div>{{name}}</div>'
const obj = {
  name: 'Jack'
}

console.log(template.replace(/{{.*}}/, obj.name))

console.log(/(\d)\1{2,}/.test('112221'))

console.log('hello'.replace(/^|$/g, '#'))
console.log('I\nlove\nJavaScript'.replace(/^|$/gm, '#'))

console.log('[JS] Lesson_01.mp4'.replace(/\b/g, '#'))
console.log('[JS] Lesson_01.mp4'.replace(/\B/g, '#'))
console.log('hello'.replace(/(?=l)/g, '#'))
console.log('hello'.replace(/(?!l)/g, '#'))

console.log('12345678 123456789'.replace(/(?!\b)(?=(\d{3})+\b)/g, ','))

console.log('188888888.00'.replace(/(\B)(?=(\d{3})+\b)/g, ','))
