# service

This is an example for 3rd party users to get data from contract.

## 1. Deploy

### 1.1 Environment
In this document, I depoly the system on Ubuntu 20.04 LTS. If you are using any other OS, only a slight adjustment is needed.

### 1.2. Install Node v14
```
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash
sudo yum install nodejs
```

### 1.3. Configuration file
create .env under root directory as below,

for mainnet,
```
ETH_ENDPOINT=https://babel-api.mainnet.iotex.io
# from start block height to get data
START_HEIGHT=8888888
PEBBLE_CONTRACT=`${pebble contract address}`
```

for testnet, change ETH_ENDPOINT as below,
```
ETH_ENDPOINT=https://babel-api.testnet.iotex.io
```

### 1.4. Install Node Libraries
```
npm install
```

### 1.5. Build Proto
```
npm run build-proto
```

### 1.6. Build Source Code
```
npm run build
```

### 1.7. Start Service
```
npm start
```