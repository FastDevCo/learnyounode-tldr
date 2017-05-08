const http = require('http')
const fs = require('fs')
const url = require('url')

const port = process.argv[2]

const httpOK = (res, data) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(data))
}

const httpNotFound = (res) => {
  res.writeHead(404)
  res.end()
}


const server = http.createServer((req, res) => {

  // parse the URL
  const parsedUrl = url.parse(req.url, true)
  const reqUrl = parsedUrl.pathname
  const iso = parsedUrl.query.iso

  if (reqUrl == '/api/parsetime') {
    const d = new Date(iso)
    const resData = {
       hour: d.getHours(),
       minute: d.getMinutes(),
       second: d.getSeconds()
     }
    return httpOK(res, resData)
  }

  if (reqUrl == '/api/unixtime') {
    const resData = {unixtime: new Date(iso).getTime()}
    return httpOK(res, resData)
  }

  return httpNotFound(res)
})

server.listen(port)
