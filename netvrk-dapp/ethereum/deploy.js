const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'Your seed phrase here',
    'https://rinkeby.infura.io/v3/{YourProjectKey}'
); 
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from: ', accounts[0]);
    // console.log('0x'+bytecode);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' +bytecode, arguments: ['10000'] })
    .send({ gas: '1000000', from: accounts[0] });
    // console.log(interface);
    console.log('Contract deployed to: ', result.options.address);
};
deploy();
