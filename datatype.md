Tokens
------------

Components:
* Name
* Address
* Balance
* Orderbook: stack of offers


* Numeric lookup table:
  * Token #1 => FIXED
  * Token #2 => ICO
  * ....

* it should be possible to add tokens

* Token-structure
  * has an orderBook(buy/sell)
  * Points to an address (erc20)
  * has a name(symbolName)

OrderBook
------------

* Lookup based on Price
  * Linked List
  * Points to higher price
  * Points to lower price

* Token -> buyBook(bid)
  * lowestBuyPrice(firstElement)
  * currentBuyPrice(highest)
  * amountBuyPrices

* Token -> sellBook(ask)
  * highestSellPrice(lastElement)
  * curSellPrice(lowest)
  * amountSellPrices

Structure OrderBook
------------

* sellBook@50 wei
  * higherPrice
  * lowerPrice
  * Offers (struct with all offers at this price)
  * Offer_index

* buyBook@45 wei
  * higherPrice
  * lowerPrice
  * Offers and offer_index

Offers
------------

* A stack of Offers
* FIFO
  * User1 sell 10 tokens for 15 & User2 sell 5 tokens for 15
  * User3 buy 10 for 15
    * Buy from User1 first
* Build up a stack