const fs = require('fs')

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err, null)
    const filteredFiles = list.filter(x => x.endsWith(`.${ext}`))
    callback(null, filteredFiles)
  })
}
