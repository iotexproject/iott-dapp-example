import _ from "lodash"
import fs from "fs-extra"
import { ethers } from "hardhat"

async function main() {
  const [ owner ] = await ethers.getSigners()
  const height = await ethers.provider.getBlockNumber()
  console.log(`HEIGHT=${height}`)

  const sharedAddressPath = `${process.cwd()}/config/${ethers.provider.network.chainId}.json`
  const data = await fs.readFileSync(sharedAddressPath)
  const addressBook = JSON.parse(data.toString())

  const Bank = await ethers.getContractFactory('Bank')
  const bank = await Bank.attach('0x' + addressBook.BANK_CONTRACT)

  const argv = process.argv;
  if (argv.length < 2) {
    console.log(`usage: ${argv[0]} ${argv[1]} address`);
    return;
  }

  const balance = await bank.balanceOf('0xE02Fb9ad7B63c283847C418d3f34f9317b340D89');
  console.log(balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
