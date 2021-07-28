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

  const Application = await ethers.getContractFactory('Application')
  const app = await Application.attach('0x' + addressBook.APP_CONTRACT)

  const tx = await app.updateFirmware('pebble', '1.0.1', 'https://pebble.iotex.io', 'https://pebble.iotex.io/avatar')
  await tx.wait()
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
