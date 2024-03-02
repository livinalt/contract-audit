// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

// this is the improved version of the StorageVictim contract
contract StorageVictim {

    address owner;
    Storage public str;

    struct Storage {
       address user;
       uint256 amount;
    }

    mapping(address => uint256) public storages;

    // Constructor to set the contract owner was not present in the older version
    constructor() {
        owner = msg.sender;
    }

    // Function to store funds in the contract
    function store(uint256 _amount) public payable {
        require(msg.sender != address(0), "Invalid address"); // to perform sanity checks
        require(_amount > 0, "Amount must be greater than zero"); // this would aid to save user gas

        str.user = msg.sender;
        str.amount = storages[msg.sender]; 
        
        storages[msg.sender] += _amount;  // This update user's storage balance
    }

    // Function to retrieve stored data for the caller
    function getStore() public view returns(address, uint256) {
        return (str.user, str.amount);
    }

    // Function to retrieve the owner's address
    function getOwner() external view returns (address) {
        return owner;
    }

    // Added an extra function to withdraw funds from the contract
    function withdraw(uint256 _amount) public {
        require(_amount > 0, "Withdrawal amount must be greater than zero");
        require(storages[msg.sender] >= _amount, "Insufficient balance");

        storages[msg.sender] -= _amount;        // This update user's storage balance

        payable(msg.sender).transfer(_amount);        // Transfer funds to the caller

    }
}
