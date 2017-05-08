const fs = require('fs')


fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err; // error handling

  // same as in program3.js but inside the callback:
  // count newlines \n with regexp
  const newlineCount = data.match(/\n/g || []).length
  console.log(newlineCount)
});


