const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const filepath = process.argv[3]

const server = http.createServer((req, res) => {
  // fs.createReadStream has a .pipe method
  // think about the .pipe method as "pipe(toHere)"
  // you want to pipe to the response, right?
})

server.listen(port)
