// npx hardhat run scripts/deploy.js --network rinkeby
// npx hardhat verify --network rinkeby contract_address
const hre = require("hardhat");
async function main() {
    let NFT = await hre.ethers.getContractFactory("FliperPass");
    const fliper_pass = await NFT.deploy();   //CONTRACT INFO
    await fliper_pass.deployed();
    console.log("FliperPass Contract deployed to:", fliper_pass.address);

    NFT = await hre.ethers.getContractFactory("FLIPER");
    const fliper = await NFT.deploy();   //CONTRACT INFO
    await fliper.deployed();
    console.log("Fliper Contract deployed to:", fliper.address);

    NFT = await hre.ethers.getContractFactory("Staking");
    const staking = await NFT.deploy(fliper_pass.address, fliper.address);   //CONTRACT INFO
    await staking.deployed();
    console.log("Staking Contract deployed to:", staking.address);

    await fliper_pass.setStakingAddress(staking.address);
    await fliper_pass.setSilverPath("https://ipfs.io/ipfs/QmUzGykK9mccmZJzvZhmPay7Y426LjMLCxP2DdibvrL6AJ");

    await fliper.addController(staking.address);
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
