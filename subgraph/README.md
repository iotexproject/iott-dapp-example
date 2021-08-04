# subgraph

This document describes how to setup a subgraph project and deploy to the graph node.

## 1. Install

### 1.1 Environment
In this document, I depoly the system on Ubuntu 20.04 LTS. If you are using any other OS, only a slight adjustment is needed.

### 1.2. Install Node v14
```
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash
sudo yum install nodejs
```

### 1.3. Install Node Libraries
```
npm install
```

## 2. Build

### 2.1. Configure

Copy "abis" and "config" directories from contracts, and put here.
```
cp ../contracts/abis . -r
cp ../contracts/config . -r
```

### 2.2. Prepare

for testnet,
```
npm run preapre:testnet
```

for mainnet,
```
npm run preapre
```

### 2.3. Codegen

```
npm run codegen
```

## 3. Deploy Locally

### 3.1. Create subgraph project

```
npm run create-local
```

### 3.2. Deploy to local the graph node

```
npm run deploy-local
```

## 4. Deploy to mainnet


### 4.1. Create subgraph project

```
npm run create
```

### 4.2. Deploy the graph node of iotex mainnet

```
npm run deploy
```

