import _ from "lodash"
import { ethers } from "hardhat"
import { expect } from "chai"
import { Contract } from "@ethersproject/contracts"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"

describe("Bank unit test", () => {
  let bank: Contract

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

    await expect(bank.grant(operator.address)).to.emit(bank, "OperatorGranted").withArgs(operator.address)

    const value = 1000000
    await expect(bank.connect(holder1).deposit(holder1.address, { value })).to.emit(bank, "Deposit").withArgs(holder1.address, value)
  })

  describe("deposit", () => {
    it("invalid value", async () => {
      await expect(bank.connect(holder2).deposit(holder2.address)).to.be.revertedWith("invalid value")
    })

    it("success", async () => {
      const value = 1000000
      await expect(bank.connect(holder2).deposit(holder2.address, { value })).to.emit(bank, "Deposit").withArgs(holder2.address, value)

      expect(await bank.balanceOf(holder2.address)).to.equal(value)
    })
  })

  describe("withdraw", () => {
    it("invalid amount", async () => {
      await expect(bank.connect(holder1).withdraw(holder2.address, 0)).to.be.revertedWith("invalid amount")
    })

    it("amount exceeds bank balance", async () => {
      await expect(bank.connect(holder1).withdraw(holder2.address, 2000000)).to.be.revertedWith(
        "amount exceeds bank balance",
      )
    })

    it("withdraw amount exceeds balance", async () => {
      await expect(bank.connect(holder2).withdraw(holder2.address, 500000)).to.be.revertedWith(
        "withdraw amount exceeds balance",
      )
    })

    it("success", async () => {
      const amount = 500000
      const balance = await holder2.getBalance()
      await expect(bank.connect(holder1).withdraw(holder2.address, amount))
        .to.emit(bank, "Withdraw")
        .withArgs(holder1.address, holder2.address, amount)

      expect(await holder2.getBalance()).to.equal(balance.add(amount))
    })
  })

  describe("pay", () => {
    it("onlyOperator", async () => {
      await expect(bank.connect(attacker).pay(holder1.address, holder2.address, 10000)).to.be.revertedWith(
        "caller is not the operator",
      )
    })

    it("invalid amount", async () => {
      await expect(bank.connect(operator).pay(holder1.address, holder2.address, 0)).to.be.revertedWith("invalid amount")
    })

    it("amount exceeds bank balance", async () => {
      await expect(bank.connect(operator).pay(holder1.address, holder2.address, 2000000)).to.be.revertedWith(
        "amount exceeds bank balance",
      )
    })

    it("amount exceeds balance", async () => {
      const value = 1000000
      await expect(bank.connect(holder2).deposit(holder2.address, { value })).to.emit(bank, "Deposit").withArgs(holder2.address, value)

      await expect(bank.connect(operator).pay(holder1.address, holder2.address, 1100000)).to.be.revertedWith(
        "amount exceeds balance",
      )
    })

    it("success", async () => {
      await expect(bank.connect(operator).pay(holder1.address, holder2.address, 1000000))
        .to.emit(bank, "Paid")
        .withArgs(holder1.address, holder2.address, 1000000)
    })
  })
})
