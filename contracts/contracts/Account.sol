// SPDX-License-Identifier: MIT

pragma solidity 0.7.3;

contract Account {
    event Updated(address owner, string name, string avatar);

    struct Profile {
        string name;
        string avatar;
    }

    mapping(address => Profile) public accounts;

    function updateProfile(
        string memory name,
        string memory avatar
    ) public {
        Profile memory p = accounts[msg.sender];
        if (
            keccak256(bytes(p.name)) != keccak256(bytes(name)) ||
            keccak256(bytes(p.avatar)) != keccak256(bytes(avatar))
        ) {
            accounts[msg.sender] = Profile(name, avatar);
            emit Updated(msg.sender, name, avatar);
        }
    }
}
