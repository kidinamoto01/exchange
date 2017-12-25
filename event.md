what is event?
------------

* Event cannot be accessed from within the contract
  * but via Web3

* 3 parameters can be indexed and searched

* Non-indexed values will be stored

* index values can be searched for but not retrived

Administrative Events
------------

* Add a token

* The only thing

* Cannot destory the contract


Deposit&Withdrawal Events
------------

* DepositEther
* WithdrawEther

* DepositToken
* WithdrawToken

* Who, how many timestamp, symbolname

Orders
------------

* Create LimitOrder
  * Sell/Buy Order
  * symbolName, who, volume, price
  * Emit "Order_key" so that orders can be cancled

* Orders fulfilled
  * Sell/Buy orders
  * symbolName, volume, price
  * from which "order_key"

* Cancel Order

