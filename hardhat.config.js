require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@bonadocs/docgen");
const endpointUrl = "ADD_YOUR_QUICKNODE_URL_HERE";
const privateKey = "ADD_YOUR_PRIVATE_KEY_HERE";

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    arbitrum: {
      url: "https://arb-mainnet.g.alchemy.com/v2/PlfQTc_2Lv40t2iEVrT-b_QGJ5ZTNgW9",
      accounts: [
        "0x724d5397cd9f7ac5625c615e6c07f79e58cab1a9a07e6875f832b8a23a4494ff",
      ],
    },
  },
  docgen: {
    projectName: "PaymentSplitter",
    projectDescription: "",
    // deploymentAddresses: {
    //   // optional. If you want to generate widgets for deployed contracts
    //   HelloWorld: [
    //     {
    //       chainId: 42161, // arbitrum
    //       address: "0xC1EE0246C8b0B27eB65FbF3bB9f07dDC26a46507",
    //     },
    //   ],
    // },
  },
};
