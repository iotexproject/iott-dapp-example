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

  const Registration = await ethers.getContractFactory('Registration')
  const registration = await Registration.attach('0x' + addressBook.REGISTRATION_CONTRACT)

  const devices = [
    {
      imei: '103381234567408',
      address: '0xf7FF3Cd9423FCAd9b5c9C99EB479E90cB264Ffd4'
    }
  ];

  const tx = await registration.ship(devices.map(v => v.imei), devices.map(v => v.address))
  await tx.wait();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
