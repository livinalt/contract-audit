import { ethers } from "hardhat";

async function main() {

  const contractAddress = "0xA0e366F3512f9DF00081D1119A9c9402eBc5eCca";

  const storageVictimContract = await ethers.getContractAt("StorageVictim", contractAddress);
  
  const depositAmount = await ethers.parseEther("0.5");
  const withdrawFUnd = await ethers.parseEther("0.05");

  console.log("--------------------------------------------");
  const storeOwner = await storageVictimContract.getStore();
  console.log(`Here are your store details  ${storeOwner}`);
  console.log("--------------------------------------------");

  console.log("--------------------------------------------");
  const accountOwner = await storageVictimContract.getOwner();
  console.log(`Here is your address ${accountOwner}`);
  console.log("--------------------------------------------");

  const depositTxn = await storageVictimContract.store(depositAmount);
  await depositTxn.wait();
  console.log(`You have successfull deposited ${depositAmount}`);
  console.log("--------------------------------------------");
  
  const withdrawTxn = await storageVictimContract.store(withdrawFUnd);
  await withdrawTxn.wait();
  console.log(`You have successfull withdraw ${withdrawFUnd}`);
  console.log("--------------------------------------------");

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});





