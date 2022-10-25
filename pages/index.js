import { useEffect } from "react"
import { ethers } from "ethers";

export default function Home() {
  useEffect(() => {
    const loadProvider = async () => {
      const ethereum = window.ethereum;
      const provider = new ethers.providers.Web3Provider(ethereum);
      console.log("provider: ", provider);
      console.log("ethereum: ", ethereum);
    }
    loadProvider();
  }, []);
  const connect = () => {
    const ethereum = window.ethereum;
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
    ethereum.request({ method: "eth_requestAccounts" })
  }

  return (
    <div>
      <h1>Value: 0</h1>
      <button>
        Increment
      </button>
      <button>
        Decrement
      </button>
      <button onClick={connect}>
        Connect Wallet
      </button>
    </div>
  )
}
