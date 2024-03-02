# Smart Contract Audit

## Purpose

The purpose of the this project is to upgrade `StorageVictim` smart contract, a contract written to provide a decentralized storage solution where users can securely store data along with their address on the Ethereum blockchain and make it compatible with a stable 0.8 version, in this case ```0.8.18```. It also shows how to conduct auditing of smart contracts, unit testings and security checks. 


## Overview

The `StorageVictim` contract is written in Solidity and provides basic functionality for storing data in a decentralized manner. It includes the following key features:

- **Storage:** Users can store data along with their address in the contract.
- **Ownership:** The contract owner is set during deployment and has special privileges.

## Getting Started

To interact with the `StorageVictim` contract, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine using the following command:
   ```
   git clone https://github.com/livinalt/contract-audit
   ```

2. **Install Dependencies:** Install the required dependencies using npm:
   ```
   npm install
   ```

3. **Compile the Contract:** Compile the Solidity contract using Hardhat:
   ```
   npx hardhat compile
   ```

4. **Deploy the Contract:** Deploy the compiled contract to a local development network or testnet of your choice using Hardhat:
   ```
   npx hardhat run scripts/deploy.js --network <network_name>
   ```

5. **Interact with the Contract:** Once the contract is deployed, you can interact with it using web3.js, ethers.js, or any other Ethereum development library.

## Contract Details

### Functions

- **store(uint256 _amount):** Allows users to store data along with a specified amount. The amount must be greater than zero.
- **getStore():** Retrieves the stored data for the caller's address.
- **getOwner():** Returns the owner's address.
- **withdraw(uint256 _amount):** Allows the user to withdraw their savings.

### State Variables

- **owner:** An address variable to store the owner of the contract.
- **storages:** A mapping from addresses to stored data.

## Testing

Unit tests for the `StorageVictim` contract are located in the `test` directory. You can run the tests using Hardhat:
```
npx hardhat test
```

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


## License

This project is licensed under the MIT License. 
