// we need require.js in this directory for this.

const fs = webrequire('fs');

fs.promises.readFile('cow.txt', (err, res) => {
    console.log(res);
});