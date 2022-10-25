const { readFile, writeFile } = require('node:fs')

const [file1, file2, flag] = process.argv.slice(2)

if (file1 === undefined && file2 === undefined) {
  process.stdin.on('data', (data) => {
    console.log(data.toString().split('\n').map((element, index) => `${index + 1}: ${element}`).join('\n'))
  })
} else if (file2 === undefined) {
  console.log('Second argument is required.')
} else if (flag !== undefined && flag !== '-n' && flag !== '-y') {
  console.log(`${flag} is not a valid argument! (Expected '-n' or '-y')`)
} else {
  readFile(file1, 'utf8', (err, data) => {
    if (err) {
      console.log(err.message)
    } else {
      writeFile(file2, data.split('\n').map((element, index) => `${index + 1}: ${element}`).join('\n'), { flag: flag === undefined || flag === '-n' ? 'wx' : 'w' }, (errWriteFile) => {
        if (errWriteFile) {
          console.log(errWriteFile.message)
        }
      })
    }
  })
}
