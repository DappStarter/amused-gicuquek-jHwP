require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift recipe pitch huge imitate private food giggle'; 
let testAccounts = [
"0x08d9c011dccc2ff264b921293bd160fd59a75a3c13b29ea85db33d8d89bcbcd4",
"0xf00bdecfa02e0571af0be4886d8d859e43271365a701579da0867b2534b9a20f",
"0x2e50701cb1648ffc10f41747684a641b2d785221d42fc94eb03257f6cf5bf722",
"0xe00604cbe0791241fd0e90e1df47339b97bdde1fa60c78594fa73e9fd7be9ef7",
"0x7b9d4704946b22ec9349e5ea08eaff04d39d808e16804c0ec6c224874cdbbb2f",
"0xd21caebaafe4c3344891c80d3fb11d306f3f860ac45eeadadabece3af659f871",
"0xe4f55fd9cea75e9f4d6da73b5c2e2bc7b901b74324615f23da254891da9f83d1",
"0x7a6db0b1c5a35b8f0a96ae144b8c1e461ffb6553d1f396840e9294d450a64229",
"0x0458d57406b7ceed5cce58060b8bfecb0dcccebfa5c0febd32f8295c7b574089",
"0x421db583dbe1267d302959a53e59ff41f19a269de24f5691472ff9758dfc1fea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

