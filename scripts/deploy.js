// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Stations = await hre.ethers.getContractFactory("Stations");

  const station = await Stations.deploy("0xdF94fCA483faf1bf1f1f484df3e0F1B5fF216bAe",
    "Den of understanding",
    "den-of-understanding",
    "an investigation into pulling the curtain back and seeing how the machinery works",
    "0x0000", "0x1E00", "");

  await station.deployed();

  console.log("Station deployed to:", station.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
