const { ethers } = require("ethers");
const ABI = require("./abi.json");

// Provider for Polygon Mumbai testnet
const provider = new ethers.providers.JsonRpcProvider(
  `https://polygon-mumbai.infura.io/v3/54168210826b4011bab024ea8c452230`
);

const walletAddress = "0x6f41fa1a76037ebc4c91a3b7f595bb509c0668f3";
const privateKey =
  "757174aa1db90055355225c655fe56c00e42bef3acc0f6b20dd4de147d238c22"; // Replace with your private key

const contractIntraction = async () => {
  // Connect wallet to signer using private key
  const signer = new ethers.Wallet(privateKey, provider);

  // Connect to the contract using signer
  const walletContract = new ethers.Contract(walletAddress, ABI, signer);

  // Get the recipient's address
  const recipientAddress = "0x4e25aec97De40E34F503bf123fCad04Afe02046f"; // Replace with the recipient's address

  // Get the amount of tokens to transfer (in wei)
  const amount = ethers.utils.parseUnits("0.001", 18); // Example: 1 token

  try {
    // Send the transaction to transfer tokens
    const tx = await walletContract.transfer(recipientAddress, amount);

    console.log("Transaction hash:", tx.hash);

    // Wait for the transaction to be mined
    await tx.wait();

    console.log("Transaction confirmed");
  } catch (error) {
    console.error("Error transferring tokens:", error);
  }
};

contractIntraction();
