var fixedSupplyToken = artifacts.require("./FixedSupplyToken.sol");

contract('MyToken', function(accounts) {

   it("name should be Example Fixed Supply Token", function() {
        var _myTokenName;

        return fixedSupplyToken.deployed().then(function(instance) {
            myTokenInstance = instance;
            return myTokenInstance.name.call();
        }).then(function(myTokenName) {
            _myTokenName = myTokenName;
            assert.equal(_myTokenName, "Example Fixed Supply Token", "token name is defined");
        });
    });


    it("first account should own all tokens", function() {
        var _totalSupply;
        var myTokenInstance;
        return fixedSupplyToken.deployed().then(function(instance) {
            myTokenInstance = instance;
            return myTokenInstance.totalSupply.call();
        }).then(function(totalSupply) {
            _totalSupply = totalSupply;
            return myTokenInstance.balanceOf(accounts[0]);
        }).then(function(balanceAccountOwner) {
            assert.equal(balanceAccountOwner.toNumber(), _totalSupply.toNumber(), "Total Amount of tokens is owned by owner");
        });
    });

});