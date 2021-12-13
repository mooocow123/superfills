// we need require.js in this directory for this.

const fs = webrequire('@node/fs');

fs.promises.readFile('cow.txt', (stat, res) => {
    console.log(stat, res);
});