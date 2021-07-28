// SPDX-License-Identifier: MIT

pragma solidity 0.7.3;
pragma experimental ABIEncoderV2;

import "./Operatable.sol";
import "./interfaces/IRegistration.sol";

contract Registration is Operatable, IRegistration {
    struct Device {
        address addr;
        address owner;
    }

    mapping(string => Device) public factory;

    function find(string memory imei) public view override returns (address, address) {
        return (factory[imei].addr, factory[imei].owner);
    }

    function ship(
        string[] memory imeis,
        address[] memory addrs
    ) public override onlyOperator {
        require(imeis.length == addrs.length, "array length mismatch");
        for (uint256 i; i < imeis.length; i++) {
            require(factory[imeis[i]].addr == address(0), "device already shipped");
            factory[imeis[i]].addr = addrs[i];
        }
    }

    function setOwner(
        string memory imei,
        address owner
    ) public override onlyOperator {
        require(factory[imei].addr != address(0), "invalid imei");
        factory[imei].owner = owner;
    }
}