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

  const registration = '0x' + addressBook.REGISTRATION_CONTRACT
  const Shipper = await ethers.getContractFactory("Shipper")
  const shipper = await Shipper.deploy(registration)
  await shipper.deployed()
  
  console.log(`SHIPPER_CONTRACT=${shipper.address}`)

  addressBook.SHIPPER_CONTRACT = shipper.address.slice(2)
  await fs.writeFile(sharedAddressPath, JSON.stringify(addressBook, null, 2))
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
