# iott-dapp-example contracts

# 1. Development Guide

## 1.1 Environment

In this document, I depoly the system on Ubuntu 20.04 LTS. If you are using any other OS, only a slight adjustment is needed.

## 1.2 Install Node v14
```
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash
sudo yum install nodejs
```

## 1.3 Configuration file
Create .env under root directory as below,
```
PRIVATE_KEY=`${your private key to deploy contracts}`
```

## 1.4 Install Node Libraries
```
npm install
```

## 1.5 Build Contracts
```
npm run build
```
After build successfully, all abi files was put to "abis" directory.

## 1.6 Run Tests
```
npm run test
```

## 1.7 Deploy Contracts
```
# mainnet
npx hardhat run scripts/1_deploy.ts --network mainnet
# testnet
npx hardhat run scripts/1_deploy.ts --network testnet
```
You can also run other scripts under "scripts/" directory.

After deploy successfully, a json file named with "${chainId}.json" was put to "config" directory.

# 2. Contracts

The device registration flow:
![avatar](https://github.com/iotexproject/iott-dapp-example/raw/main/doc/registration.png)

## 2.1 Account

Account contract was designed to record user profile including 'name' and 'avatar'.

Functions
* updateProfile - user update profile

Events
* Updated - when user profile was updated

## 2.2 Application

Application contract was designed to manage application firmware.
While admin calls 'updateFirmware' function, the contract emit an event named with 'FirmwareUpdated'.

Functions
* updateFirmware - admin add/set firmware including 'name', 'version', etc.

Events
* FirmwareUpdated - when updateFirmware was called

## 2.3 Bank

Bank contract was designed to stake iotx for user, who can recharge gas for all devices belong to him.

Functions
* deposit - user stake gas
* withdraw - user withdraw left gas

Events:
* Deposit - when user deposit gas
* Withdraw - when user withdraw gas
* Paid - when some gas was consumed by devices

## 2.4 Pebble

Pebble contract was designed to manage devices and verify data.

Functions
* setFirmware - assign firmware for device
* addData - trustream send device's data
* proposal - user proposal a device registration
* confirm - device confirm the proposal
* remove - user remove a device belongs to him

Events
* Firmware - emit by setFirmware
* Proposal - emit by proposal
* Confirm - emit by confirm
* Remove - emit by remove

## 2.5 Registration

Registration contract was designed to ship devices at manufactory, and maintain imei->address mapping.

Functions
* ship - ship devices at manufactory
* find - find device by imei

## 2.6 Shipper

Shipper contract was designed to simplify the ship procedure on testnet.
It should not be deployed on mainnet.

## 2.7 Token

Token contract is an example ERC20 token, designed to reward trustream node for relaying device's data.
