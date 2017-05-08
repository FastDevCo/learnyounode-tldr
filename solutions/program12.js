const http = require('http')
const fs = require('fs')
const smap = require('through2-map')

const port = process.argv[2]
const filepath = process.argv[3]

const server = http.createServer((req, res) => {
  if (req.method == 'GET') {
    req.pipe(smap(chunk => chunk.toString().toUpperCase())).pipe(res)
  }
})

server.listen(port)
