import { useEffect, useState, createContext, useContext } from "react";
import { useNetwork } from "../web3";
import ERC20ABI from "./erc20.json";

const Context = createContext({});

const useContract = () => useContext(Context);

const Provider = ({ children }) => {
  // Here we use our hooks to get access to some juicy stuff
  let { web3 } = useNetwork();
  let [contract, setContract] = useState();
  const [account, setAccount] = useState("");

  // Initialise the contract on component mount
  useEffect(() => {
    if (web3) {
      // An ethereum ABI, is simply a JSON representation of the ethereum smart contract
      // It details all the expected usable functions
      // To instantiate a useable contract we parse in the ABI as well as an Ethereum address.
      // This is the address corresponding to the location of the smart contract store on ethereum
      // The example address we gave is to the Pickle token
      const _contract = new web3.eth.Contract(
        ERC20ABI,
        "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5"
      );
      setContract(_contract);
    }
  }, [web3]); // eslint-disable-line

  const fetchPickleBalance = async (address) => {
    return await contract.methods.balanceOf(address).call();
  };

  const getTokens = async (address) => {
    return await contract.methods.symbol().call();
  };

  const getAccount = async () => {
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  };

  return (
    <Context.Provider
      value={{
        // expose more methods here to interact with the contract
        fetchPickleBalance,
        getTokens,
        getAccount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default {
  Provider,
  useContract,
};
