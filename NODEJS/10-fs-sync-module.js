const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt')
const second = readFileSync('./content/second.txt')

const result = writeFileSync('./content/result.txt', `the result is : ${first}, ${second}` , {flag: 'a'});
