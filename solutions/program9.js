const http = require('http')
const bl = require('bl')

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]


const printer = (err, data) => console.log(data.toString())

// this is what we refer to as "callback hell"

http.get(url1, response1 => {
  response1.pipe(bl(printer))

  // after response1 handled, get url2
  http.get(url2, response2 => {
    response2.pipe(bl(printer))

    // after response2 handled, get url3
    http.get(url3, response3 => {
      response3.pipe(bl(printer))
    })
  })
})
