const { ethers } = require("hardhat");
const { mine } = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
  await hre.network.provider.send("hardhat_mine", ["0x100"]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
