const { readFile } = require('node:fs')

readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(data.split('\n').map((element, index) => `${index + 1}: ${element}`).join('\n'))
  }
})
