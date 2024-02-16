const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/54168210826b4011bab024ea8c452230`
);

const qurreyBlockchain = async () => {
  //   const block = await provider.getBlockNumber();
  //   console.log("This is current block", block);
  const balance = await provider.getBalance(
    `0xeBec795c9c8bBD61FFc14A6662944748F299cAcf`
  );
  console.log("balance of this address is i n big number", balance);

  /////////////////////////////////////////////////////////////////////////////////
  const balanceinEther = ethers.utils.formatEther(balance);
  console.log("Balance in ether is ", balanceinEther);
};

qurreyBlockchain();
