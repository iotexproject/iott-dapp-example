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
