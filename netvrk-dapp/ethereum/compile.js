const path = require("path");
const fs = require("fs");
const solc = require("solc");

const TSKPath = path.resolve(__dirname, "contract", "TSK.sol");
const source = fs.readFileSync(TSKPath, "utf8");

var input = {
  language: "Solidity",
  sources: {
    "TSK.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

// console.log(solc.compile(source, 1));

// module.exports = solc.compile(source, 1).contracts[':TSK'];

var output = JSON.parse(solc.compile(JSON.stringify(input)), 1);

let bytecode;
let interface;

for (var contractName in output.contracts["TSK.sol"]) {
  bytecode = output.contracts["TSK.sol"][contractName].evm.bytecode.object;

  interface = JSON.stringify(output.contracts["TSK.sol"][contractName].abi);
}

console.log("\nBytecode: ", bytecode, "\nABI: ", interface);

module.exports = {
    interface,
    bytecode,
};
