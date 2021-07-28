import _ from "lodash"
import { ethers } from "hardhat"
import { expect } from "chai"
import { Contract } from "@ethersproject/contracts"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

describe("Account unit test", () => {
  let account: Contract

  let owner: SignerWithAddress
  let operator: SignerWithAddress
  let attacker: SignerWithAddress

  beforeEach(async () => {
    ;[owner, operator, attacker] = await ethers.getSigners()

    const Account = await ethers.getContractFactory("Account")
    account = await Account.deploy()
    await account.deployed()
  })

  describe("updateProfile", () => {
    const name = "jane"
    const avatar = "http://ipfs.io/pebble/avatar/jane"
    it("success", async () => {
      await expect(account.updateProfile(name, avatar))
        .to.emit(account, "Updated")
        .withArgs(owner.address, name, avatar)
    })
  })
})
