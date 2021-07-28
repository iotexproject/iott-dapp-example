import _ from "lodash"
import dotenv from "dotenv"
import { ethers } from "hardhat"
import { expect } from "chai"
import { Contract } from "@ethersproject/contracts"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { sha256 } from "ethers/lib/utils"
import { ecsign, toBuffer, setLengthLeft } from "ethereumjs-util"

dotenv.config({ path: ".env" })

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const privateKeyToAddress = require("ethereum-private-key-to-address")

const SIGNER = privateKeyToAddress(PRIVATE_KEY)
const signerPrivateKey = Buffer.from(PRIVATE_KEY, "hex")
const imei0 = "00000000000000000000000000000000"
const imei1 = "00000000000000000000000000000001"
const data0 = Buffer.from('{"Temperature:30"}', "utf8")
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

const defaultApp = "pebble"
const newApp = "ucam"

function getTimestamp() {
  return _.floor(Date.now() / 1000)
}

function signData(type: number, data: Buffer, timestamp: number) {
  const hash = sha256(Buffer.concat([ setLengthLeft(toBuffer(type), 4), data, setLengthLeft(toBuffer(timestamp), 4) ]))
  const { r, s, v } = ecsign(Buffer.from(hash.slice(2), "hex"), signerPrivateKey)
  return Buffer.concat([r, s, toBuffer(v)])
}

function signConfirm(owner: string, timestamp: number) {
  const hash = sha256(Buffer.concat([ Buffer.from(owner.slice(2), 'hex'), setLengthLeft(toBuffer(timestamp), 4) ]))
  const { r, s, v } = ecsign(Buffer.from(hash.slice(2), "hex"), signerPrivateKey)
  return Buffer.concat([r, s, toBuffer(v)])
}

const ts = getTimestamp()
const signature = signData(0, data0, ts)
const channel = 0x11

describe("Pebble unit test", () => {
  let pebble: Contract
  let bank: Contract
  let registration: Contract

  let owner: SignerWithAddress
  let holder1: SignerWithAddress
  let holder2: SignerWithAddress
  let holder3: SignerWithAddress
  let operator: SignerWithAddress
  let attacker: SignerWithAddress

  beforeEach(async () => {
    ;[owner, holder1, holder2, holder3, operator, attacker] = await ethers.getSigners()

    const Bank = await ethers.getContractFactory("Bank")
    bank = await Bank.deploy()
    await bank.deployed()

    const Registration = await ethers.getContractFactory("Registration")
    registration = await Registration.deploy()
    await registration.deployed()

    const Pebble = await ethers.getContractFactory("Pebble")
    pebble = await Pebble.deploy(bank.address, registration.address)
    await pebble.deployed()

    await expect(bank.grant(pebble.address)).to.emit(bank, "OperatorGranted").withArgs(pebble.address)
    await expect(registration.grant(pebble.address)).to.emit(registration, "OperatorGranted").withArgs(pebble.address)
    await expect(registration.grant(operator.address)).to.emit(registration, "OperatorGranted").withArgs(operator.address)
    await expect(pebble.grant(operator.address)).to.emit(pebble, "OperatorGranted").withArgs(operator.address)

    const value = 1000000
    await expect(bank.connect(holder1).deposit(holder1.address, { value })).to.emit(bank, "Deposit").withArgs(holder1.address, value)

    await registration.connect(operator).ship([imei0], [SIGNER]);
  })

  describe("grant", () => {
    it("onlyOwner", async () => {
      await expect(pebble.connect(attacker).grant(holder1.address)).to.be.revertedWith("caller is not the owner")
    })

    it("success", async () => {
      await expect(pebble.grant(holder1.address)).to.emit(pebble, "OperatorGranted").withArgs(holder1.address)

      expect(await pebble.operators(holder1.address)).to.equal(true)
    })
  })

  describe("revoke", () => {
    it("onlyOwner", async () => {
      await expect(pebble.connect(attacker).revoke(operator.address)).to.be.revertedWith("caller is not the owner")
    })

    it("success", async () => {
      await expect(pebble.revoke(operator.address)).to.emit(pebble, "OperatorRevoked").withArgs(operator.address)

      expect(await pebble.operators(operator.address)).to.equal(false)
    })
  })

  describe("set firmware", () => {
    it("not owner", async () => {
      await expect(pebble.setFirmware(imei0, newApp)).to.be.revertedWith("caller is not the owner")
    })

    it("success", async () => {
      const sig = signConfirm(holder1.address, ts)
      await expect(pebble.connect(operator).confirm(imei0, holder1.address, ts, sig, 10000, channel))
        .to.emit(pebble, "Confirm")
        .withArgs(imei0, holder1.address, SIGNER, channel)
      await expect(pebble.connect(holder1).setFirmware(imei0, newApp))
        .to.emit(pebble, "Firmware")
        .withArgs(imei0, newApp)
    })
  })

  describe("proposal", () => {
    const name = "pebble1"
    const avatar = "https://ipfs.io/pebble/avatar1.png"
    it("invalid imei", async () => {
      await expect(pebble.proposal(imei1, name, avatar)).to.be.revertedWith("invalid imei")
    })

    it("invalid value", async () => {
      await expect(pebble.proposal(imei0, name, avatar)).to.be.revertedWith("invalid value")      
    })

    it("success", async () => {
      const value = 10000
      await expect(pebble.proposal(imei0, name, avatar, { value }))
        .to.emit(pebble, "Proposal")
        .withArgs(imei0, owner.address, SIGNER, name, avatar)
    })
  })

  describe("remove", () => {
    beforeEach(async () => {
      const sig = signConfirm(holder1.address, ts)
      await expect(pebble.connect(operator).confirm(imei0, holder1.address, ts, sig, 10000, channel))
        .to.emit(pebble, "Confirm")
        .withArgs(imei0, holder1.address, SIGNER, channel)
    })

    it("caller is not the owner", async () => {
      await expect(pebble.remove(imei0)).to.be.revertedWith("caller is not the owner")
    })

    it("success", async () => {
      await expect(pebble.connect(holder1).remove(imei0))
        .to.emit(pebble, "Remove")
        .withArgs(imei0, holder1.address)

      const ret = await registration.find(imei0)
      expect(ret[1]).to.be.equals(ZERO_ADDRESS)
    })
  })

  describe("confirm", () => {
    it("onlyOperator", async () => {
      const sig = signConfirm(holder1.address, ts)
      await expect(pebble.confirm(imei1, holder1.address, ts, sig, 10000, channel))
        .to.be.revertedWith("caller is not the operator")
    })

    it("invalid imei", async () => {
      const sig = signConfirm(holder1.address, ts)
      await expect(pebble.connect(operator).confirm(imei1, holder1.address, ts, sig, 10000, channel))
        .to.be.revertedWith("invalid imei")
    })

    it("owner not changed", async () => {
      const sig = signConfirm(holder1.address, ts)
      await expect(pebble.connect(operator).confirm(imei0, holder1.address, ts, sig, 10000, channel))
        .to.emit(pebble, "Confirm")
        .withArgs(imei0, holder1.address, SIGNER, channel)

      await expect(pebble.connect(operator).confirm(imei0, holder1.address, ts + 1, sig, 10000, channel))
        .to.be.revertedWith("owner not changed")
    })

    it("invalid timestamp", async () => {
      const sig = signConfirm(holder1.address, ts)
      await expect(pebble.connect(operator).confirm(imei0, holder1.address, ts, sig, 10000, channel))
        .to.emit(pebble, "Confirm")
        .withArgs(imei0, holder1.address, SIGNER, channel)

      await expect(pebble.connect(operator).confirm(imei0, holder2.address, ts, sig, 10000, channel))
        .to.be.revertedWith("invalid timestamp")
    })

    it("success", async () => {
      const sig = signConfirm(holder1.address, ts)
      await expect(pebble.connect(operator).confirm(imei0, holder1.address, ts, sig, 10000, channel))
        .to.emit(pebble, "Confirm")
        .withArgs(imei0, holder1.address, SIGNER, channel)
    })
  })

  describe("addData", () => {
    beforeEach(async () => {
      const sig = signConfirm(holder1.address, ts)
      await expect(pebble.connect(operator).confirm(imei0, holder1.address, ts, sig, 10000, channel))
        .to.emit(pebble, "Confirm")
        .withArgs(imei0, holder1.address, SIGNER, channel)
    })

    it("onlyOperator", async () => {
      await expect(pebble.connect(attacker).addData(imei0, 0, data0, ts, signature, 10000)).to.be.revertedWith(
        "caller is not the operator",
      )
    })

    it("invalid imei", async () => {
      await expect(pebble.connect(operator).addData(imei1, 0, data0, ts, signature, 10000)).to.be.revertedWith(
        "invalid imei",
      )
    })

    it("device has not owner", async () => {
      await registration.connect(operator).ship([imei1], [SIGNER]);
      await expect(pebble.connect(operator).addData(imei1, 0, data0, ts, signature, 10000)).to.be.revertedWith(
        "device has not owner",
      )
    })

    it("invalid timestamp", async () => {
      await expect(pebble.connect(operator).addData(imei0, 0, data0, ts, signature, 10000)).to.be.revertedWith(
        "invalid timestamp",
      )
    })

    it("invalid signature", async () => {
      await expect(pebble.connect(operator).addData(imei0, 0, data0, ts + 1, signature, 10000)).to.be.revertedWith(
        "invalid signature",
      )
    })

    it("amount exceeds bank balance", async () => {
      const sig = signData(0, data0, ts + 1)
      await expect(pebble.connect(operator).addData(imei0, 0, data0, ts + 1, sig, 100000000))
        .to.be.revertedWith("amount exceeds bank balance")
    })

    it("success", async () => {
      const amount = 10000
      const sig = signData(0, data0, ts + 1)
      await expect(pebble.connect(operator).addData(imei0, 0, data0, ts + 1, sig, amount))
        .to.emit(pebble, "Data")
        //.withArgs(imei0, operator.address, data0, amount)
        .to.emit(bank, "Paid")
        .withArgs(holder1.address, operator.address, amount)
    })

    it("replay", async () => {
      const amount = 10000
      const sig = signData(0, data0, ts + 1)
      await expect(pebble.connect(operator).addData(imei0, 0, data0, ts + 1, sig, amount))
        .to.emit(pebble, "Data")
        //.withArgs(imei0, operator.address, data0, amount)
        .to.emit(bank, "Paid")
        .withArgs(holder1.address, operator.address, amount)

      await expect(pebble.connect(operator).addData(imei0, 0, data0, ts + 1, sig, amount))
        .to.be.revertedWith("invalid timestamp")
    })
  })
})
