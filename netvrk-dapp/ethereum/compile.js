const path = require('path');
const fs = require('fs');
const solc = require('solc');

const TSKPath = path.resolve(__dirname, 'contract', 'TSK.sol');
const source = fs.readFileSync(TSKPath, 'utf8');

// console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1).contracts[':TSK'];
