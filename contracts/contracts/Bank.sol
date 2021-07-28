// SPDX-License-Identifier: MIT

pragma solidity 0.7.3;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "./Operatable.sol";
import "./interfaces/IBank.sol";

contract Bank is Operatable, IBank {
    using SafeMath for uint256;

    mapping(address => uint256) public balanceOf;

    function deposit(address to) public override payable {
        require(msg.value > 0, "invalid value");
        require(to != address(0), "invalid to");
        balanceOf[to] = balanceOf[to].add(msg.value);
        emit Deposit(to, msg.value);
    }

    function withdraw(address payable to, uint256 amount) public override {
        require(amount > 0, "invalid amount");
        require(amount <= address(this).balance, "amount exceeds bank balance");
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(amount, "withdraw amount exceeds balance");
        to.transfer(amount);
        emit Withdraw(msg.sender, to, amount);
    }

    function pay(
        address from,
        address payable to,
        uint256 amount
    ) public override onlyOperator {
        require(amount > 0, "invalid amount");
        require(amount <= address(this).balance, "amount exceeds bank balance");
        balanceOf[from] = balanceOf[from].sub(amount, "amount exceeds balance");
        to.transfer(amount);
        emit Paid(from, to, amount);
    }
}
