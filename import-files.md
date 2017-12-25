Remix vs Truffle

General

* import "filename";
* import * as symbolname from "filename";

* from the current directory: import "./x" as x;
* from the global "include directory": import "x" as x;

Detail

* Solc:
  * context:prefix=target
  * clone github.com/ethereum/dapp-bin/locally to /usr/local/dapp-bin
  * import "github.com/ethereum/dapp-bin/library/iterable_mapping.sol"as it_mapping;
  * solc github.com/ethereum/dapp-bin=/usr/local/dapp-bin source.sol

* Truffle
  * Use EthPM as the new package manager for Ethereum
  * Via NPM
  * Normal source files in a folder
