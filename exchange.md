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

##Place Orders

* buyToken(string token, uint priceInWei,uint amount)
  * try to buy amount of tokens for priceInWei each
  * if sell-offers (ask) are available with price <= priceInWei
     * Order Executed
  * else: a limit order is created

* sellToken(string token,  uint priceInWei, uint amount)
  * try to sell amount of tokens for priceInWei each
  * if buy-offers (bid) are available with price >= priceInWei
     * Order Executed
  * else: a limit order is created

##order management

* cancelOrder(string symbol_name,bool is_sell_order,uint priceInWei,uint offerKey)
  * cancel an order from the calling-address for a certain token for a specific price
* getSellOrderBook(string token) constant returns(uint[].uint[])
  * returns the ask orders,ordered from the lowest to the highest price
    * aggregated by price
    * price in the first array and volumnes in the second array
* getBuyOrderBook(string token) constant returns(uint[].uint[])
