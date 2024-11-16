import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from "./contract/chai.json";
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Mid from './components/Mid';
import Buy from './components/Buy';
import Memos from './components/Memos';
import Footer from './components/Footer';



function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState(null);
  const [formattedAccount, setFormattedAccount] = useState("");

  useEffect(() => {
    const storedAccount = localStorage.getItem("account");
    const storedFormattedAccount = localStorage.getItem("formattedAccount");

    if (storedAccount) {
      setAccount(storedAccount);
      setFormattedAccount(storedFormattedAccount);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, abi.abi, signer);

      setState({ provider, signer, contract });
    }
  }, []);

  const connectWallet = async () => {
    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
    const contractABI = abi.abi;

    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      if (accounts.length > 0) {
        const currentAccount = accounts[0];
        setAccount(currentAccount);
        const formatted = `${currentAccount.substring(0, 6)}...${currentAccount.substring(currentAccount.length - 4)}`;
        setFormattedAccount(formatted);

        // Store account information in localStorage
        localStorage.setItem("account", currentAccount);
        localStorage.setItem("formattedAccount", formatted);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        setState({ provider, signer, contract });
      }

      ethereum.on("chainChanged", () => window.location.reload());
      ethereum.on("accountsChanged", () => window.location.reload());

    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setFormattedAccount("");
    setState({
      provider: null,
      signer: null,
      contract: null,
    });

    // Clear the saved wallet info from localStorage
    localStorage.removeItem("account");
    localStorage.removeItem("formattedAccount");
  };

  return (
    <>
      <Toaster /> {/* Add Toaster here */}
      <Navbar connectWallet={connectWallet} disconnectWallet={disconnectWallet} account={formattedAccount} />
      <Mid />
      <Buy state={state} />
      <Memos state={state} />
      <Footer />
    </>
  );
}

export default App;
