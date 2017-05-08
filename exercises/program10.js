const net = require('net')

const port = process.argv[2]

const server = net.createServer(socket => {
  // socket has some methods like write and end
})

server.listen(port)
