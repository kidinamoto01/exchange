# exchange
## Start your own testnet
1. geth --datadir=./chaindata init ./genesis.json 
2.geth   --rpc --rpcaddr "0.0.0.0" --rpccorsdomain "*" --datadir=./chaindata  --rpcapi "personal,db,eth,net,web3,shh,admin,miner" --shh --rpcport 8545 
3.
/Applications/Mist.app/Contents/MacOS/Mist --rpc /Users/b/Documents/ethereum/dex/chaindata/geth.ipc

