// SPDX-License-Identifier: MIT

pragma solidity 0.7.3;

interface IBank {
    event Deposit(address indexed to, uint256 amount);
    event Withdraw(address indexed from, address indexed to, uint256 amount);
    event Paid(address indexed from, address indexed to, uint256 amount);

    function deposit(address to) external payable;
    function withdraw(address payable to, uint256 amount) external;
    function pay(
        address from,
        address payable to,
        uint256 amount
    ) external;
}