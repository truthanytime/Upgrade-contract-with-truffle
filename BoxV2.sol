// contracts/BoxV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;
 
contract BoxV2 {
    uint256 private value;
    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);
    uint256 public me;
 
    // Stores a new value in the contract
    function constructor1(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
        me=1;
    }
    
    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return me;
    }
    
    // Increments the stored value by 1
    function increment() public {
        value = value + 1;
        me=10;
        emit ValueChanged(value);
    }
}