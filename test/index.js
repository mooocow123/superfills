// we need require.js in this directory for this.

const fs = require('@node/fs')
const path = require('@node/path')

fs.promises.readFile('cow.txt', (stat, res) => {
    console.log(stat, res)
})

console.log(`gaizgaga.com${path.resolve('gomata', 'gaizga', 'maaa')}`)