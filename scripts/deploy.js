async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const thecontract = await ethers.getContractFactory("TokenERC20Capped");
  const contract = await thecontract.deploy('TetherX', 'USDTX', 1000000);

  await contract.deployed();
  // This solves the bug in Mumbai network where the contract address is not the real one
  const txHash = contract.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  const contractAddress = txReceipt.contractAddress;
  console.log("Contract deployed to address:", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
