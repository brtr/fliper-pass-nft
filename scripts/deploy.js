// npx hardhat run scripts/deploy.js --network rinkeby
// npx hardhat verify --network rinkeby contract_address
const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("FliperPass");
  const nft = await NFT.deploy();   //CONTRACT INFO
  await nft.deployed();
  console.log("Contract deployed to:", nft.address);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
