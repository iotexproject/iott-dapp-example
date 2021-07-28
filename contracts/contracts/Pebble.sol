// SPDX-License-Identifier: MIT

pragma solidity 0.7.3;

import "./Operatable.sol";
import "./interfaces/IBank.sol";
import "./interfaces/IRegistration.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Pebble is Operatable {
    event Data(
        string imei,
        address operator,
        uint32 _type,
        bytes data,
        uint32 timestamp,
        bytes signature,
        uint256 gas
    );
    event Firmware(string imei, string app);
    event Proposal(string imei, address owner, address device, string name, string avatar);
    event Confirm(string imei, address owner, address device, uint32 channel);
    event Remove(string imei, address owner);

    IBank public bank;
    IRegistration public registration;
    address public token;
    mapping(string => uint32) public timestamps;

    constructor(address _bank, address _registration) {
        bank = IBank(_bank);
        registration = IRegistration(_registration);
    }

    function setToken(address _token) public onlyOwner {
        token = _token;
    }

    function setFirmware(string memory imei, string memory app) public {
        (, address owner) = registration.find(imei);
        require(owner == msg.sender, "caller is not the owner");
        emit Firmware(imei, app);
    }

    function checkTime(string memory imei, uint32 timestamp) internal returns (bool) {
        if (timestamps[imei] >= timestamp)
            return false;

        timestamps[imei] = timestamp;
        return true;
    }

    function addData(
        string memory imei,
        uint32 _type,
        bytes memory data,
        uint32 timestamp,
        bytes memory signature,
        uint256 gas
    ) public onlyOperator {
        (address device, address owner) = registration.find(imei);
        require(device != address(0), "invalid imei");
        require(owner != address(0), "device has not owner");
        require(checkTime(imei, timestamp), "invalid timestamp");
        require(recover(sha256(abi.encodePacked(_type, data, timestamp)), signature) == device, "invalid signature");
        bank.pay(owner, msg.sender, gas);
        if (token != address(0)) {
            safeTokenTransfer(msg.sender, 1e18);
        }
        emit Data(imei, msg.sender, _type, data, timestamp, signature, gas);
    }

    function proposal(string memory imei, string memory name, string memory avatar) public payable {
        (address device, address owner) = registration.find(imei);
        require(device != address(0), "invalid imei");
        require(owner == address(0), "device has owner");
        require(msg.value > 0, "invalid value");
        bank.deposit{ value: msg.value }(msg.sender);
        emit Proposal(imei, msg.sender, device, name, avatar);
    }

    function remove(string memory imei) public {
        (,address owner) = registration.find(imei);
        require(owner == msg.sender, "caller is not the owner");
        registration.setOwner(imei, address(0));
        emit Remove(imei, owner);
    }

    function confirm(
        string memory imei,
        address _owner,
        uint32 timestamp,
        bytes memory signature,
        uint256 gas,
        uint32 channel
    ) public onlyOperator {
        (address device, address owner) = registration.find(imei);
        require(device != address(0), "invalid imei");
        require(owner != _owner, "owner not changed");
        require(checkTime(imei, timestamp), "invalid timestamp");
        require(recover(sha256(abi.encodePacked(_owner, timestamp)), signature) == device, "invalid signature");
        registration.setOwner(imei, _owner);
        bank.pay(_owner, msg.sender, gas);
        emit Confirm(imei, _owner, device, channel);
    }

    function recover(bytes32 hash, bytes memory signature) internal pure returns (address) {
        bytes32 r;
        bytes32 s;
        uint8 v;

        assembly {
            r := mload(add(signature, 0x20))
            s := mload(add(signature, 0x40))
            v := byte(0, mload(add(signature, 0x60)))
        }

        if (v < 27) {
            v += 27;
        }

        if (v != 27 && v != 28) {
            return (address(0));
        }
        return ecrecover(hash, v, r, s);
    }

    function safeTokenTransfer(address _to, uint256 _amount) internal {
        uint256 balance = IERC20(token).balanceOf(address(this));
        if (_amount > balance) {
            IERC20(token).transfer(_to, balance);
        } else {
            IERC20(token).transfer(_to, _amount);
        }
    }
}
