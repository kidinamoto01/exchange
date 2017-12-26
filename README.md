# exchange
## Start your own testnet

Init the chain:

geth --datadir=./chaindata init ./genesis.json 

Start Ethereum:

geth   --rpc --rpcaddr "0.0.0.0" --rpccorsdomain "*" --datadir=./chaindata  --rpcapi "personal,db,eth,net,web3,shh,admin,miner" --shh --rpcport 8545 

Start Mist Wallet:

/Applications/Mist.app/Contents/MacOS/Mist --rpc /Users/b/Documents/ethereum/dex/chaindata/geth.ipc

