const { ethers } = require("ethers");
const ABI = require("./abi.json");
const provider = new ethers.providers.JsonRpcProvider(
  `https://polygon-mumbai.infura.io/v3/54168210826b4011bab024ea8c452230`
);

const walletAddress = "0x6f41fa1a76037ebc4c91a3b7f595bb509c0668f3";

const contractIntraction = async () => {
  const walletContract = new ethers.Contract(walletAddress, ABI, provider);

  const contractName = await walletContract.name();
  console.log("this is contract name", contractName);

  const num = await walletContract.getValue();
  const balanceinEther = ethers.utils.formatEther(num);
  console.log("this is current number", balanceinEther);

    const contractBalance = await walletContract.contractBalance();
    const CBb = ethers.utils.formatEther(contractBalance);
    console.log("This is current contract balance ", CBb);

  //   const accountbalance = await walletContract.accountBalance(
  //     "0xe917e81c69Bf15238c63abd45d1c335C2fc80bDD"
  //   );
  //   const ABc = ethers.utils.formatEther(accountbalance);
  //   console.log("This is user balance matic", ABc);
};
contractIntraction();
