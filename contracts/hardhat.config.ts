import "@nomiclabs/hardhat-waffle";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const { PRIVATE_KEY } = process.env;

export default {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    testnet: {
      url: 'https://babel-api.testnet.iotex.io',
      accounts: [ PRIVATE_KEY ],
      chainId: 4690,
      gas: 8500000,
      gasPrice: 1000000000000
    },
    mainnet: {
      url: 'https://babel-api.mainnet.iotex.io',
      accounts: [ PRIVATE_KEY ],
      chainId: 4689,
      gas: 8500000,
      gasPrice: 1000000000000
    }
  },
  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000
      },
      evmVersion: "petersburg"
    }
  }
};
