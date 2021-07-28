// SPDX-License-Identifier: MIT

pragma solidity 0.7.3;
pragma experimental ABIEncoderV2;

import "./interfaces/IRegistration.sol";

contract Shipper {
    IRegistration public registration;

    constructor(address _registration) {
        registration = IRegistration(_registration);
    }

    function ship(
        string[] memory imeis,
        address[] memory addrs
    ) public {
        registration.ship(imeis, addrs);
    }
}