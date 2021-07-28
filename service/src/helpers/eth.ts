import Web3 from 'web3';

export class EthHelper {
  public web3: Web3;

  constructor(endpoint: string) {
    this.web3 = new Web3(Web3.givenProvider || endpoint);
  }

  public async balance(address: string) {
    const { web3 } = this;
    const gasBalance = web3.utils.toBN(await web3.eth.getBalance(address));
    return gasBalance;
  }

  public async estimateGas(from: string) {
    const { web3 } = this;
    const gasLimit = await web3.eth.estimateGas({ from });
    const price = await web3.eth.getGasPrice();
    const gasPrice = web3.utils.toBN(price);
    return web3.utils.toBN(gasLimit).mul(gasPrice);
  }

}