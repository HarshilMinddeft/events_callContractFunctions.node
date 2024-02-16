const { ethers } = require("ethers");
const ABI = require("./contractABI.json");
async function getTransfer() {
  usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; ///USDC Contract
  const provider = new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/54168210826b4011bab024ea8c452230`
  );

  const contract = new ethers.Contract(usdcAddress, ABI, provider);

  contract.on("Transfer", (from, to, value, event) => {
    let transferEvent = {
      from: from,
      to: to,
      value: value,
      eventData: event,
    };

    console.log(JSON.stringify(transferEvent, null, 4));
  });
}

getTransfer();
