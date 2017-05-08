const fs = require('fs')

const dir = process.argv[2]
const ext = process.argv[3]

fs.readdir(dir, (err, list) => {
  if (err) throw err
  const filteredFiles = list.filter(x => x.endsWith(`.${ext}`))
  console.log(filteredFiles.join('\n'))
})
