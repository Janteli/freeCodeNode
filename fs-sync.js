const {readFileSync, writeFileSync} = require('fs')
// const fs = require('fs') same as above

console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second)
// result-sync will be the file created if not exist within context folder- overrided the content within it
// writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`)

// appending - no overridding
writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`,{flag:'a'})

console.log('done with this task');
console.log('starting the next one');

