import { ethers } from "hardhat";

async function main() {

  const spongePoseidonLib = "0x12d8C87A61dAa6DD31d8196187cFa37d1C647153";
  const poseidon6Lib = "0xb588b8f07012Dc958aa90EFc7d3CF943057F17d7";


  const ClaimableNFT = await ethers.getContractFactory("ClaimableNFT", {
    libraries: {
      SpongePoseidon: spongePoseidonLib,
      PoseidonUnit6L: poseidon6Lib
    },
  });
  
  const tierA = await ClaimableNFT.deploy("TIERA", "TIERA", 1000000);
  const tierB = await ClaimableNFT.deploy("TIERA", "TIERA", 800000);
  const tierC = await ClaimableNFT.deploy("TIERA", "TIERA", 60000);


  await tierA.deployed();

  console.log(
    `TierA with deployed to ${tierA.address}`
  );

  console.log(
    `TierB  deployed to ${tierB.address}`
  );

  console.log(
    `TierC deployed to ${tierC.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
