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

  let tx = await pebble.grant(owner.address)
  await tx.wait()

  const Registration = await ethers.getContractFactory('Registration')
  const registration = await Registration.attach('0x' + addressBook.REGISTRATION_CONTRACT)
  tx = await registration.grant(owner.address)
  await tx.wait()
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
