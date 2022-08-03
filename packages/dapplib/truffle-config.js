require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remember unable grace glove flock there'; 
let testAccounts = [
"0xe8fea4c0d9222cec8642823b251acc8a56550087f412be14483b9cbdd97a7ddf",
"0x9f95b203576998a8d854ef6475c6c519a465ba5b28828fe9187f538ed581cbff",
"0xc0c5b9e6565f4b3d1b5be8694a4ad02927edec4663588b01363554536b196397",
"0x7b47a94c44e7ca40c5fc1d3f5a8757c1fc583526284e345d1852346a6731dfba",
"0x67942dd58edcf54417f1b23575bd2508451878506320dbef27a098073d0303cc",
"0x8b4878948c009f645452c049ef0afa49bb272d8057a7699d17c8d2ec4ef00159",
"0x75111626f54c639f2ac88e666ce0c94510bd892e71dc15b10bc196b787c2933b",
"0x641c0c4a1c45eda58c30cf1ebe3a58284bd417661b28ac15c0ea5684cf7baaf3",
"0x8d909c9f9827f8c5d12a57f6cb077d87798a97528484e03c6eb267345701b947",
"0x3f746dda96f065b6833f5f259fe079e74cb465e8c182bf7e6d49961f26d946d1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

