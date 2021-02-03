const html = `
    <html>
        <body>
            <div>
                <p>我是文本</p>
                <p>我是文本</p>
            </div>
        </body>
    </html>
`

// 实现 parse
function parse(html) {
  const formattedHtml = html.replace(/\s/g, '')
  console.log(formattedHtml)
}

parse(html)

// 输出：
// {
//   tag: 'html',
//   children: [
//     {
//       tag: 'body',
//       children: [
//         {
//           tag: 'div',
//           children: [
//             { tag: 'p', text: '我是文本', children: [] },
//             { tag: 'p', text: '我是文本', children: [] }
//           ]
//         }
//       ]
//     }
//   ]
// }
