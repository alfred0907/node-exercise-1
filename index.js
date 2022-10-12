const { readFile, writeFile } = require('node:fs')

if (process.argv[2] === undefined) {
  console.log('Requires an argument of path.')
} else if (process.argv[3] === undefined) {
  console.log('Second argument is required.')
} else if (process.argv[4] !== undefined && process.argv[4] !== '-n' && process.argv[4] !== '-y') {
  console.log(`${process.argv[4]} is not a valid argument! (Expected '-n', '-y' or undefined)`)
} else {
  readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
      console.log(err.message)
    } else {
      writeFile(process.argv[3], data.split('\n').map((element, index) => `${index + 1}: ${element}`).join('\n'), { flag: process.argv[4] === undefined || process.argv[4] === '-n' ? 'wx' : 'w' }, (errWriteFile) => {
        if (errWriteFile) {
          console.log(errWriteFile.message)
        }
      })
    }
  })
}
