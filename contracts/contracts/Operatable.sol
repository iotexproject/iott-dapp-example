// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract Operatable is Ownable {
    event OperatorGranted(address account);
    event OperatorRevoked(address account);

    mapping(address => bool) public operators;

    modifier onlyOperator() {
        require(operators[msg.sender], "caller is not the operator");
        _;
    }

    function grant(address _account) public onlyOwner {
        if (!operators[_account]) {
            operators[_account] = true;
            emit OperatorGranted(_account);
        }
    }

    function revoke(address _account) public onlyOwner {
        if (operators[_account]) {
            operators[_account] = false;
            emit OperatorRevoked(_account);
        }
    }
}
