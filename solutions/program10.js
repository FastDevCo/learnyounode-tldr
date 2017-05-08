const net = require('net')
const dateFormat = require('dateformat')

const port = process.argv[2]

const server = net.createServer(socket => {
  socket.write(dateFormat(new Date(), 'yyyy-mm-dd HH:MM'))
  socket.end('\n')
})

server.listen(port)
