import { ethers } from "hardhat";

async function main() {

  const storageVictim = await ethers.deployContract("StorageVictim");
  await storageVictim.waitForDeployment();

  console.log(`StorageVictim has been deployed to ${storageVictim.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


