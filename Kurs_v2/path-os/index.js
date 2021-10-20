// const path = require('path')

// const pathToFile = path.join(__dirname, 'index.js');
// console.log(pathToFile)

// const parse = path.parse(__filename)
// console.log(parse)

// console.log(path.isAbsolute('./el.txt'))
// console.log(path.isAbsolute('/el.txt'))

const os = require('os');

const uptime = os.uptime();
console.log(uptime)

const home = os.homedir();
console.log(home)
