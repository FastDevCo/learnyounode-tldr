const http = require('http')
const bl = require('bl')

const url = process.argv[2]

http.get(url, response => {

  response.pipe(bl((err, data) => {
    let stringData = data.toString()
    console.log(stringData.length)
    console.log(stringData)
  }))

})
