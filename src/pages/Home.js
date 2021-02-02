import React, { useState } from 'react';
import styled from 'styled-components'
import { useAccount } from '../libs/web3'
import { Input, Button} from 'antd'
import ERC20 from '../libs/erc20/erc20';
import Web3 from 'web3';

const Instructions = styled(({
    className
}) => {
    const { fetchPickleBalance } = ERC20.useContract();

    const [address, setAddress] = useState('')
    const [balance, setBalance] = useState('?')

    const handleClick = async (e) => {
        e.preventDefault();
        const balance = await fetchPickleBalance(address);
        // Since we dont store decimals on the block chain we use wei to store our values
        // wei is the smallest unit of ethereum.
        // it just adds a bunch of zeros to whatever value is stored (10^-18)
        // fromWei is just a handy util to convert it back to something we understand
        setBalance(Web3.utils.fromWei(balance))
    }

    const handleChange = (e) => {
        e.preventDefault();
        setAddress(e.target.value);
    }

    return (
        <>
            <h1>
                So you're telling me I'm connected to the ethereum blockchain :o
            </h1>
            <h2>Check ./libs/erc20 to see an example of how to interact with smart contracts</h2>

            <p>
                Try enter <a href="https://etherscan.io/address/0x2252A85e520fE2f29E0be62104D8551B32649C66">0xd1dE80930227C56eE8bB2049e4D36bFf4161163E</a> into the field below and hit submit
            </p>

            <div>
                <Input placeholder="Enter in an ethereum address" value={address} onChange={handleChange}/>
                <Button onClick={handleClick}>Get Pickle Balance</Button>
            </div>
            <p>Balance: {balance}</p>
        </>
    )
})
``

export default styled(
	({
		className
	}) => {
		const { status } = useAccount()

		return status === 'CONNECTED'
            ? 	<Instructions />
			: <></>
	})
	`
		display: flex;
		align-items: center;
	`