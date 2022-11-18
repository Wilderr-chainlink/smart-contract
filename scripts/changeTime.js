const { ethers } = require("hardhat");
const { mine } = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
  await network.provider.send("evm_increaseTime", [3600 * 24 * 10]);
  await network.provider.send("evm_mine");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
