// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Box {
  uint256 private _value;

  // emitted when the stored value changes
  event ValueChanged(uint256 value);

  // stores a new value in the contract
  function store(uint256 value) public {
    _value = value;
    emit ValueChanged(value);
  }

  function retrieve() public view returns (uint256) {
    return _value;
  }
}
