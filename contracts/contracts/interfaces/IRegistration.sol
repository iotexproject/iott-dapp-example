// SPDX-License-Identifier: MIT

pragma solidity 0.7.3;
pragma experimental ABIEncoderV2;

interface IRegistration {
    function find(string memory imei) external view returns (address, address);
    function ship(
        string[] memory imeis,
        address[] memory addrs
    ) external;
    function setOwner(
        string memory imei,
        address owner
    ) external;
}