const ls = require('./program6_module.js')

const dir = process.argv[2]
const ext = process.argv[3]

ls(dir, ext, (err, filteredFiles) => {
  if (err) throw err;
  console.log(filteredFiles.join('\n'))
})
