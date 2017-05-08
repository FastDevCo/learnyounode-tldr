const fs = require('fs')
// read file as string
const fileContents = fs.readFileSync(process.argv[2]).toString()
// count newlines \n with regexp
const newlineCount = fileContents.match(/\n/g || []).length
console.log(newlineCount)
