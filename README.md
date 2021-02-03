# Welcome to MCV Hiring

It might not seem very significant just yet, but congrats on getting here.

My name is Dos and at Mycelium we are pretty passionate about Front-end and Solidity development. 

Included in this repo is a small development task that will give a little bit of exposure to the kind of work we do here.

By no means is any of this work required, but it will give you a leg up during the interview.

Plus, I guarantee you will gain exposure to something that you didnt know already. 

Honestly, you could leave now and do your due diligence on Web3 and already you would have gained something.

But we should probably zoom out a little.

## Web3
So you've heard of Bitcoin. 

What?! I thought that was a scam. 

In 2017 cryptocurrencies got a lot of hype. Subsequently, an incredible amount of money poured into not just Bitcoin, but other crypto projects as well. 

Then a lot of projects began doing initial coin offerings based on an idea alone. As a result, the hype bubble burst.

But the projects didn't go away: we were always here. Now each one of those ideas is a product. And each one of those products holding millions, sometimes billions of dollars in value.

This is what we call DeFi (Decentralised Finance). At time of writing there is [27.5B dollars worth of value locked in DeFi](https://defipulse.com/). At Mycelium we are building these products and the user interfaces that interact with them. 

This is Web3 Development.

## The Why
The Ethereum blockchain is the main layer 1 solution we at Mycelium are building on. No one can turn off Ethereum and it's permissionless, meaning anyone who wants to can participate. You can write contracts that perform banking functions and you can write contracts that perform exchange functions on Ethereum. All the financial systems built on Ethereum are peer-to-peer and every transaction is transparent. There's no need for middlemen if you want finance.   

I'm not here to sell you cryptocurrencies. But at Mycelium these are the things we are passionate about. 

Always question. Seek the source. Demand transparency. Own your data. 

## The Details
Time for the challenge.

Within this repository is a basic example of a React App. The only functionality this application has is connecting to the blockchain. 

Here's a bit of reading that will help to understand:

https://blockchainhub.net/web3-decentralized-web/

Essentially, with Web3 development there is no longer a backend. The backend is the blockchain. 

Every user has an account, with a corresponding public and private key. This account is public. Everyone can see the account's state, but no-body knows who the account belongs to. So you can perform financial transactions without requiring a bank to link the account to an identity.  

One thing that I like about Web3 development is the new wave of NFT applications. All tokens (or alt-coins) on Ethereum are Smart Contracts. These Smart Contracts follow a set standard called the ERC20 Standard. NFT's ([Non-Fungible Tokens](https://en.wikipedia.org/wiki/Non-fungible_token)) are a different type of token. Unlike ERC20's, each NFT is unique. 

On one hand, if I hold the native Ethereum token ETH, that token is indistinguishable from another ETH. So If I have 1 ETH and you also had 1 ETH, I can swap mine with yours and there is no way of determining whose ETH is whose. All ETH are fungible, meaning they are interchangeable with each other. 

On the other hand, say there was an NFT called COOLNFT. If you held 1 COOLNFT, and I held 1 COOLNFT, we couldn't swap them. They would each be uniquely identifiable.

This might not excite you right now, but there are quite a number of use cases for NFT's. NFT's are a very popular use case for [digital art](https://medium.com/@mojkripto-com/digital-art-and-nft-tokens-5ef32890bb4e). 


## The Task
Nearly there.

## Get Started With the Classic
### `yarn && yarn start` or `npm run install && npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

## Requirements
You will need to [download](https://metamask.io/download.html) a browser extension called Metamask. Metamask is an Ethereum wallet browser extension which makes interacting with the Ethereum blockchain easier by making it extremely accessible. 

[If you need help](https://support.xy.company/hc/en-us/articles/360020070514-How-to-download-and-use-MetaMask-Wallet)

### Description

The task we have designed is to create a simple DApp (decentralised app) that allows a user to connect to the website with an Ethereum wallet. 

Once connected, you will get access to the user's public address. You can verify which tokens are owned by following the functions defined in the [ERC20 token standard](https://eips.ethereum.org/EIPS/eip-20).

### Task1
The first task is almost complete for you.

All that remains to do is display the owned tokens in a list. This will simply be a list of addresses which look like 0xd1dE80930227C56eE8bB2049e4D36bFf4161163E.

These are the contract address's for each of the owned NFT's. There is a lot of information here so it's ok if you can't digest it all on this first read. 
Feel free to ask questions, or if you get stuck: don't worry about it. The idea is you gain exposure to Web3 and the Ethereum ecosystem. Just don't give up on the first go. This will be a large topic of discussion later on.

### Task2
As stated before, each of the returned addresses relates to another Ethereum smart contract. You can create instances of these contracts. These will be [ERC721 contracts](https://eips.ethereum.org/EIPS/eip-721). ERC721 extends the ERC20 standard, with a few extra pieces of functionality (mainly the uniqueness of each token). Use this standard, along with the connected account, to identify the exact token ID owned by the user for each NFT. 

### Task3
Use the ERC721 functions to fetch the tokenURI. This link corresponds to the tokens metadata stored somewhere. This is most commonly stored on IPFS: a distributed file storage. But it is just as common to set up an API and database which serves the same purpose. It is simply a way to store more information about the NFT, since storing large data, such as images, on the blockchain is expensive.  A simple GET request on the tokenURI will fetch you what you need.

Task 3 requires you to display this metadata in a nice format. It could be in the form of card images, along with NFT's name. This is really up to you (and it's your chance to impress).

### Wrap-up
Good luck. Feel free to email me at aidan@mycelium.ventures.
