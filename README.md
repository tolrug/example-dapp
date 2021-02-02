# Welcome To MCV Hiring

It might not seem very significant just yet, but congrats on getting here.

My name is Dos and at Mycelium we are pretty passionate about Frontend and Solidity development. 

Included in this repo is a small development task that will give a little bit of exposure to the kind of work we do here at Mycelium.

By no means is any of this work required, but it will give you a leg up during the interview.

Plus I guarantee you will gain exposure to something that you didnt know already. 

## Web3 Development
You could honestly leave now and do your due diligence on Web3 and already you would have gained something.

We should probably zoom out a little bit though.

## Ethereum
So you've heard of Bitcoin. 

What?! I thought that was a scam. The whales are starting to wake up and DeFi is starting to pump.

In 2017 cryptocurrencies got a lot of hype. Subsequently an incredible amount of money poured into the ecosystem. 

A lot of projects began doing initial coin offerings based on an idea alone. As a result cryptocurrencies saw a huge decline (the bubble burst).

These projects didn't go away, we were always here. Now each one of those ideas is a product. Each one of those products holding millions, sometimes billions of value.

This is what we call DeFi (Decentralised Finance). We are only at the beginning with a few basic financial instruments being ported from CeFi (Centralised Finance).

Currently at time of writing there is [27.5B dollars worth of value locked in DeFi](https://defipulse.com/). At Mycelium we are building these products.

The user interfaces that interact with these products. This is Web3 Development.

## The why?
Personally, the one thing that grinds my gears more than sheep is large financial systems excluding people from the club. Big banks have created a club. A club which currently has the power to manipulate just about every piece of information you read for the benefit of the club. I disagree with this club, and Ethereum facilitates an environment where all transactions are transparent. Financial systems are peer to peer without middlemen. The contracts controlled by anyone who wants to participate. If you want to become a bank you can. If you want to trade you can. And no one can turn off Ethereum.

I'm not here to sell you on cryptocurrencies. But, at Mycelium these are the things we are passionate about. 

Question always. Go directly to the source. Transparency. Give the data back to the individuals. 

## The Details
Thats just about enough ranting. Time to get to the challenge.

Within this repository is a basic example of a React App. The only functionality this application has is connecting to the blockchain. 

A bit of reading that will help to understand all of these words.

https://blockchainhub.net/web3-decentralized-web/

Essentially with Web3 development there is no longer a backend. The backend is the blockchain. 

Every user has an account, with a corresponding public and private key. This account is public. Where all can see the accounts state, but no-body knows who the account belongs to. Facilitating financial transactions without requiring a bank to link the account to an identity. Subsequently cutting out the bank. 

One part that I like about Web3 development is new wave of NFT applications. All token (or alt-coins) on Ethereum are Smart Contracts. These Smart Contracts follow a set standard called the ERC20 Standard.  NFT's ([Non-Fungible Tokens](https://en.wikipedia.org/wiki/Non-fungible_token)) are a different type of token. The difference being that each NFT is unique. For example the native Ethereum token ETH. If I hold 1 ETH, I can swap this 1 ETH with you, and there is no way of determining whose ETH is whose. All ETH are fungible, meaning they are interchangeable with eachother. Say there was an NFT called COOLNFT. If you held 1 COOLNFT, and I held 1 COOLNFT, they each would be uniquely identifiable.

This might not initially excite you but there are quite a number of use cases. A very popular use case is within [digital art](https://medium.com/@mojkripto-com/digital-art-and-nft-tokens-5ef32890bb4e). 


## The Task
Finally, the reading is almost finished. 
The task we have designed is to create a simple DApp (decentralised app) allows a user to connect to the website with Ethereum wallet. 

Once connected, you will get access to the users public address. You can verify which tokens are owned by following the functions defined in the ERC20 token standard.

### Task1
The first task is almost complete for you.

All it entails is simply displaying the owned tokens in a list. This will simply be a list of addresses which look like 0xd1dE80930227C56eE8bB2049e4D36bFf4161163E.

These are the contract address's for each of the owned NFT's. There is a lot of information here so it's ok if its not digestible the first read. 
Feel free to ask any questions, or if you get stuck, dont worry about it. The idea is you get exposure to it. Don't give up on the first go this will be a large topic of discussion later on.

### Task2
As said before each of the returned addresses relates to another Ethereum smart contract. Thus, you can create instances of these contracts. These will be ERC721 contracts. ERC721 extends the ERC20 standard with a few extra pieces of functionality. Mainly, the uniqueness of each token mentioned above. Use this standard along with the connected account to identify the exact token ID owned by the user for each NFT. 

### Task3
Use the ERC721 functions to fetch the tokenURI. This link corresponds to the tokens metadata stored somewhere. This is most commonly stored on IPFS a distributed file storage. But it is just as common to set up an api and database which serves the same purpose. It is simply a way to store more information about the NFT, since storing large data such as images on the blockchain is expensive. 

Task 3 requires you to display this metadata in a nice format. This may be card images, along with NFT's name. This is really up to you and your chance to impress.

### Wrap-up
Goodluck. Feel free to email me at aidan@mycelium.ventures.
