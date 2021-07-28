// SPDX-License-Identifier: MIT

pragma solidity 0.7.3;

import "./Operatable.sol";

contract Application is Operatable {
    event FirmwareUpdated(string name, string version, string uri, string avatar);

    struct Firmware {
        string version;
        string uri;
        string avatar;
    }

    mapping(string => Firmware) public firmwares;

    function updateFirmware(
        string memory name,
        string memory version,
        string memory uri,
        string memory avatar
    ) public onlyOperator {
        Firmware storage fw = firmwares[name];
        if (
            keccak256(bytes(fw.version)) != keccak256(bytes(version)) ||
            keccak256(bytes(fw.uri)) != keccak256(bytes(uri)) ||
            keccak256(bytes(fw.avatar)) != keccak256(bytes(avatar))
        ) {
            firmwares[name] = Firmware(version, uri, avatar);
            emit FirmwareUpdated(name, version, uri, avatar);
        }
    }
}
