import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from "./contract/chai.json"
import './App.css';

import Navbar from './components/Navbar'
import Mid from './components/Mid'
import Buy from './components/Buy'
import Memos from './components/Memos'
import Footer from './components/Footer'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState("None");
  const [formattedAccount, setFormattedAccount] = useState("");

  useEffect(() => {
    const connectWallet = async () => {
      // Get your Contract address after compile the code (npx hardhat run  --network sepolia scripts/finalDeploy.js)
      const contractAddress = "Your Contract Address";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const account = accounts[0]; // Use the first account

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          const formattedAccount = `${account.substring(0, 6)}...${account.substring(account.length - 4)}`;
          setFormattedAccount(formattedAccount);
          setState({ provider, signer, contract });
        } else {
          alert("Please install MetaMask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  return (
    <>
      <Navbar />
      <Mid />
      <section className="my-10 mx-10 sm:my-10 sm:mx-10 md:mx-auto md:w-2/3 md:mt-10 md:drop-shadow-lg tracking-wider flex items-center justify-center">
        <div className="px-4 sm:px-8 sm:py-4 md:px-8 md:py-4 my-20 mx-4 sm:mx-24 md:mx-0 text-center md:rounded-full bg-yellow-200 w-full sm:w-2/3">
          <span className="font-circular text-lg md:text-2xl text-gray-600 leading-normal">
            Connected Account: {formattedAccount}
          </span>
        </div>
      </section>
      <Buy state={state} />
      <Memos state={state} />
      <Footer />
    </>
  );
}

export default App;
