import _ from "lodash"
import fs from "fs-extra"
import { ethers } from "hardhat"
import { BN } from "bn.js"

async function main() {
  const [ owner ] = await ethers.getSigners()

  const Application = await ethers.getContractFactory("Application")
  const app = await Application.deploy()
  await app.deployed()

  console.log(`APP_CONTRACT=${app.address}`)

  let tx = await app.grant(owner.address)
  await tx.wait()

  const Bank = await ethers.getContractFactory('Bank')
  const bank = await Bank.deploy()
  await bank.deployed()

  console.log(`BANK_CONTRACT=${bank.address}`)

  const Registration = await ethers.getContractFactory('Registration')
  const registration = await Registration.deploy()
  await registration.deployed()

  console.log(`REGISTRATION_CONTRACT=${registration.address}`)

  const Pebble = await ethers.getContractFactory('Pebble')
  const pebble = await Pebble.deploy(bank.address, registration.address)
  await pebble.deployed()

  console.log(`PEBBLE_CONTRACT=${pebble.address}`)

  tx = await bank.grant(pebble.address)
  await tx.wait()

  tx = await registration.grant(pebble.address)
  await tx.wait()

  const Account = await ethers.getContractFactory("Account")
  const account = await Account.deploy()
  await account.deployed()
  console.log(`ACCOUNT_CONTRACT=${account.address}`)

  const Token = await ethers.getContractFactory("Token")
  const token = await Token.deploy('PBG', 'PBG', 18)
  await token.deployed()

  tx = await token.mint(pebble.address, new BN("100000000000000000000000000").toString())
  await tx.wait()

  tx = await pebble.setToken(token.address)
  await tx.wait()

  const height = await ethers.provider.getBlockNumber()
  console.log(`START_HEIGHT=${height}`)

  const addressBook = {
    APP_CONTRACT: app.address.slice(2),
    BANK_CONTRACT: bank.address.slice(2),
    REGISTRATION_CONTRACT: registration.address.slice(2),
    PEBBLE_CONTRACT: pebble.address.slice(2),
    ACCOUNT_CONTRACT: account.address.slice(2),
    TOKEN_CONTRACT: token.address.slice(2),
    START_HEIGHT: height
  }

  const sharedAddressPath = `${process.cwd()}/config/${ethers.provider.network.chainId}.json`
  await fs.writeFile(sharedAddressPath, JSON.stringify(addressBook, null, 2))
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
