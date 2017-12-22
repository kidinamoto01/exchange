##Token Management
* addToken(string symbol_name, address erc20TokenAddress) onlyowner
  * Add a token with a symbol_name
  * At a specific address
* hasToken(string symbol_name) constant returns(bool)
  * Returns true if a token can be traded

##Funds Management
* depositToken(string symbol_name,uint amount)
  * Try to send tokens in the name of the msg.sender to the exchange contract
  * Need a detour
  * cannot be sent directly
* withdrawToken(string symbol_name,uint amount)
  * withdraw amount of tokens
  * send it to a specific address
* getBalance(string symbol_name) constant returns(uint)
  * returns the token balance for the address that calls

##Ethereum Funds management
* depositEther() payable
  * is payable
  * receive ETH

* withdrawEther(uint amount_in_wei)
  * send funds directly to the calling address

* getEthBalanceInWei() constant returns (uint)
  * returns the current balance
