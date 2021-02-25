import React, { useState } from "react";
import styled from "styled-components";
import { useAccount } from "../libs/web3";
import { Input, Button } from "antd";
import ERC20 from "../libs/erc20/erc20";
import Web3 from "web3";
import axios from "axios";

const Instructions = styled(({ className }) => {
  const { fetchPickleBalance, getTokens, getAccount } = ERC20.useContract();

  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("?");
  const [tokens, setTokens] = useState();
  const [account, setAccount] = useState("");
  const [wallet, setWallet] = useState();

  const testAccount = "0x4e34e4cc38fa422a1a23eaab4e7a8d0af3bcbe9f";

  const handleClick = async (e) => {
    e.preventDefault();
    const balance = await fetchPickleBalance(address);
    // Since we dont store decimals on the block chain we use wei to store our values
    // wei is the smallest unit of ethereum.
    // it just adds a bunch of zeros to whatever value is stored (10^-18)
    // fromWei is just a handy util to convert it back to something we understand
    setBalance(Web3.utils.fromWei(balance));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const getAccountFunc = async (e) => {
    e.preventDefault();
    const account = await getAccount();
    setAccount(account);
  };

  const getTokensList = (e) => {
    e.preventDefault();

    console.log(account);

    axios({
      method: "get",
      url: `https://web3api.io/api/v1/addresses/${testAccount}/tokens`,
      headers: { "x-api-key": "UAK7797b1c5e7179fc6e1c9f81d469f5067" },
    }).then((res) => {
      console.log(res.data.payloads.records);
    });
  };

  return (
    <>
      <h1>So you're telling me I'm connected to the ethereum blockchain :o</h1>
      <h2>
        Check ./libs/erc20 to see an example of how to interact with smart
        contracts
      </h2>

      <p>
        Try enter{" "}
        <a href="https://etherscan.io/address/0x2252A85e520fE2f29E0be62104D8551B32649C66">
          0xd1dE80930227C56eE8bB2049e4D36bFf4161163E
        </a>{" "}
        into the field below and hit submit
      </p>

      <div>
        <Input
          placeholder="Enter in an ethereum address"
          value={address}
          onChange={handleChange}
        />
        <Button onClick={handleClick}>Get Pickle Balance</Button>
      </div>
      <p>Balance: {balance}</p>
      <br />
      <br />

      <h1>Now we can display all the owned tokens</h1>
      <button onClick={getAccountFunc}>Get Tokens</button>
      <p>
        Account: <br />
        {account}
      </p>

      <br />
      <h1>Or get our wallet</h1>
      <button onClick={getTokensList}>Get Wallet</button>
      <p>
        Wallet:
        <br />
        {wallet}
      </p>
    </>
  );
})``;

export default styled(({ className }) => {
  const { status } = useAccount();

  return status === "CONNECTED" ? <Instructions /> : <></>;
})`
  display: flex;
  align-items: center;
`;
