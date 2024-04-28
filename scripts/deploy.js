const hre = require("hardhat");


// getBalances
async function getBalances(address) {
  const balBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balBigInt);
}
// Console Balances
async function consoleBalances(addresses) {
  let counter = 0;
  for (let address of addresses) {
    console.log(`Address ${counter} Balance:`, await getBalances(address));
    counter++;
  }
}

// Console Memeos
async function consoleMemos(memos) {
  for (const memo of memos) {
    const name = memo.name;
    const message = memo.message;
    const timestamp = memo.timestamp;
    const from = memo.from;
    console.log(`At ${timestamp},name ${name},address ${from},message ${message}`);
  }
}

// Main Function

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const chai = await hre.ethers.getContractFactory("chai");
  const contract = await chai.deploy();
  await contract.deployed();
  console.log("Address of contract:", contract.address);
  const addresses = [owner.address, from1.address, from2.address, from3.address];
  console.log("Before Buy Chai");
  await consoleBalances(addresses);

  const amount = { value: hre.ethers.utils.parseEther("1") }
  await contract.connect(from1).buyChai("from1", "Asim", amount);
  await contract.connect(from2).buyChai("from2", "Noim", amount);
  await contract.connect(from3).buyChai("from3", "Hasan", amount);

  // After Buy Chai
  console.log("After Buy Chai");
  await consoleBalances(addresses);

  const memos = await contract.getMemos();
  consoleMemos(memos);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});