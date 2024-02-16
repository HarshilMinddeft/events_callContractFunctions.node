// // const { Web3 } = require("web3");
// const { ethers } = require("ethers");
// const ABI = require("./cont.json");

// usdcAddress = "0xc3761EB917CD790B30dAD99f6Cc5b4Ff93C4F9eA"; ///USDC Contract
// const provider = new ethers.providers.JsonRpcProvider(
//   `https://mainnet.infura.io/v3/54168210826b4011bab024ea8c452230`
// );

// const contract = new ethers.Contract(usdcAddress, ABI, provider);

// contract.methods
//   .decimals()
//   .then((value) => console.log(`The value is ${value}`));

// // const { Web3 } = require("web3");
// // const web3 = new Web3(
// //   new Web3.providers.HttpProvider(
// //     "https://eth-mainnet.g.alchemy.com/v2/EfSDc_v1wyo_dHRcuRJTmityayF8mOEE"
// //     //https://eth-mainnet.g.alchemy.com/v2/EfSDc_v1wyo_dHRcuRJTmityayF8mOEE" for ethereum balance
// //     //https://bsc-dataseed1.binance.org:443 for bnb balance
// //   )
// // );
// // web3.eth(
// //   getOwner("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48").then(console.log)
// // );

const { ethers } = require("ethers");
const ABI = require("./cont.json");

async function getDecimals() {
  const usdcAddress = "0xc3761EB917CD790B30dAD99f6Cc5b4Ff93C4F9eA"; // USDC Contract
  const provider = new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/54168210826b4011bab024ea8c452230`
  );

  const contract = new ethers.Contract(usdcAddress, ABI, provider);

  // Call the `decimals` method and await the result
  //   const value = await contract.symbol();
  //   const value1 = await contract.name();
  //   const value2 = await contract.totalSupply();
  const value = await contract.symbol();

  console.log(`The value is ${value2}`);
}

getDecimals();
