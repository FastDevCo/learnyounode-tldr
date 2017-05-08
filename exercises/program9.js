const http = require('http')
const bl = require('bl')

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

// usage: response.pipe(bl(printer))
const printer = (err, data) => console.log(data.toString())


http.get(url1, response1 => {
 // hmm... a get request inside a get callback?
})
