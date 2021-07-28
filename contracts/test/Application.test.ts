import _ from "lodash"
import { ethers } from "hardhat"
import { expect } from "chai"
import { Contract } from "@ethersproject/contracts"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

describe("Application unit test", () => {
  let application: Contract

  let owner: SignerWithAddress
  let operator: SignerWithAddress
  let attacker: SignerWithAddress

  beforeEach(async () => {
    ;[owner, operator, attacker] = await ethers.getSigners()

    const Application = await ethers.getContractFactory("Application")
    application = await Application.deploy()
    await application.deployed()

    await expect(application.grant(operator.address)).to.emit(application, "OperatorGranted").withArgs(operator.address)
  })

  describe("updateFirmware", () => {
    const name = "pebble"
    const version = "1.0.0"
    const uri = "http://ipfs.io/pebble"
    const avatar = "http://ipfs.io/pebble/avatar"

    it("onlyOperator", async () => {
      await expect(application.connect(attacker).updateFirmware(name, version, uri, avatar)).to.be.revertedWith(
        "caller is not the operator",
      )
    })

    it("success", async () => {
      await expect(application.connect(operator).updateFirmware(name, version, uri, avatar))
        .to.emit(application, "FirmwareUpdated")
        .withArgs(name, version, uri, avatar)
    })
  })
})
