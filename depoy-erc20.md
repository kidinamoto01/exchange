First, we delete the contracts which are no longer useful (ConvertLib.sol,Metacoin.sol).

Then, we have to make changes in the files under migration folder.

* initial_migration.js file will deploy the Migration.sol, we donnot need to make any changes.

* deploy_contract.js: change the deploy contract;
  * remve the links, since it is not a library
  * we add the deployer commands to deploy new contract

