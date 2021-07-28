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

  const Pebble = await ethers.getContractFactory('Pebble')
  const pebble = await Pebble.attach('0x' + addressBook.PEBBLE_CONTRACT)

  const tx = await pebble.setFirmware('123', 'pebble2')
  await tx.wait();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
