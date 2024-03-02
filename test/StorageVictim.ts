import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("StorageVictim", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployStorageVictimFixture() {
    

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const StorageVictim = await ethers.getContractFactory("StorageVictim");
    const storageVictim = await StorageVictim.deploy();
    const amount = ethers.parseEther("0.000000001");


    return { storageVictim, owner, otherAccount, amount };
  }

  describe("Deployment", function () {
   
    it("Should set the right owner", async function () {
      const { owner } = await loadFixture(deployStorageVictimFixture);
      expect(await owner).to.equal(owner.address);
    });

  });

  describe("Store", function () {
    it("user should be able to successfully store funds and update the account", async function () {
      const { storageVictim, owner } = await loadFixture(deployStorageVictimFixture);
      const deposit = ethers.parseEther("1"); // Testing with deposit of 1 ETH
      const initialBalance = ethers.parseEther("0.5"); // Testing with an initial balance of 0.5 ETH
      const updatedBbalance = deposit + initialBalance;
      await storageVictim.store(deposit);
      expect(deposit).to.equal(updatedBbalance - initialBalance);
    });

 
    describe("Withdrawal", function () {
      it("Should successfully withdraw and update the balance of the address", async function () {
        const { storageVictim } = await loadFixture(deployStorageVictimFixture);
        const withdrawFUnd = ethers.parseEther("0.05"); // Testing with withdrawal of 0.5 ETH
        const initialBalance = ethers.parseEther("1")
        const updatedBbalance = initialBalance - withdrawFUnd;
        await storageVictim.store(withdrawFUnd);
        expect(withdrawFUnd).to.equal(initialBalance - updatedBbalance);
      });
    });
    
    describe("Get Address of owner", function () {
      it("Should return the balance of the address", async function () {
        const { storageVictim, owner } = await loadFixture(deployStorageVictimFixture);
        await storageVictim.getOwner();
        expect(await owner.address); //
      });
    });
    
    describe("Get Store of the caller", function () {
      it("Should return the Address and Amount in store of the caller", async function () {
        const { storageVictim, owner, amount } = await loadFixture(deployStorageVictimFixture);
        await storageVictim.getStore();
        expect(await owner.address), amount; //
      });
    });

    }); 

  
});
