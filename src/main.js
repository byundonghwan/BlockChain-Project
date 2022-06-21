const {Blockchain, Transaction} = require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('81df91d36cf323bcab63e4492363b0e124ee562da47829015a2b4d5c8dccec72');
const myWalletAddress = myKey.getPublic('hex');



const savjeeCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log('\n starting the miner........... ');
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log('\n balance of byun is ', savjeeCoin.getBalanceOfAddress(myWalletAddress));
console.log('Is Chain valid?', savjeeCoin.isChainValid());