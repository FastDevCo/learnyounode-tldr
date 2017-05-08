const http = require('http')
const fs = require('fs')
const url = require('url')

const port = process.argv[2]

/*
We are nice people, so here are some helpers for you
*/
const httpOK = (res, data) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(data))
}

const httpNotFound = (res) => {
  res.writeHead(404)
  res.end()
}


// Server

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true)

  // YOUR CODE BELOW THIS LINE

  // parsedUrl has `pathname` and `query` properties to help you

  // if path is '/api/parsetime'
    // do something
    // return httpOK

  // if path is '/api/unixtime'
    // do something
    // return httpOK

  // request is probably not ok if we reach this line
})

server.listen(port)
