# Buy Me a Chai 🍵

"Buy Me a Chai" is a decentralized platform reimagining how creators receive support, built on Web3 technology. Unlike traditional platforms like Buy Me a Coffee, our solution leverages blockchain to create a transparent, secure, and community-driven ecosystem where creators can showcase their work and receive cryptocurrency donations directly via Ethereum smart contracts.

https://github.com/asimar007/Buy-Me-A-Chai/assets/108481922/0fe49d11-5d6c-4ae7-aa81-0e938ac4ce90

### Screenshots

1. **Payment Form** - The payment form allows users to contribute cryptocurrency to their favorite creators seamlessly.
   <br/>![Payment Form](https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/blob/main/Screenshot/form.png?raw=true)
   <br/>
2. **Supporters Table** - The supporters table shows a live list of supporters and their donation details, creating a transparent environment for creators.
   <br/>![Supporters Table](https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/blob/main/Screenshot/Table.png?raw=true)

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [What I Learned](#what-i-learned)
4. [Uses](#uses)
5. [Installation](#installation)
6. - [Smart Contract Deployment](#smart-contract-deployment)
7. - [Frontend Setup](#frontend-setup)

## Features

- **Decentralized Donations**: Creators receive support via Ethereum, ensuring direct, transparent contributions.
- **Community Governance**: Token holders have voting power to influence platform decisions and features.
- **Smart Contract Automation**: Automated processes, including donation handling, provide a seamless user experience.
- **Global Accessibility**: Blockchain ensures that donations can be made from anywhere in the world, removing the geographical and financial barriers.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Smart Contracts**: Solidity, Ethereum, Hardhat
- **Wallet Integration**: Metamask
- **Blockchain**: Ethereum

## What I Learned

- **Smart Contract Development**: I gained hands-on experience in Solidity and smart contract development, specifically focusing on building transparent and automated donation systems.
- **Decentralized Platforms**: I learned about decentralization in Web3 and how it can empower creators and supporters by removing intermediaries.
- **Blockchain Integration**: I understood the importance of integrating Ethereum blockchain technology and how Metamask facilitates transactions directly on the blockchain.
- **Community Governance**: I explored the concept of DAO-like governance, where token holders have a say in the platform's development.
- **Full-Stack Development**: This project helped me integrate both the smart contract backend and React.js frontend seamlessly.

## Uses

- **Creator Support**: Creators can showcase their work and receive direct donations in cryptocurrency, ensuring transparency and trust.
- **Decentralized Donations**: With Ethereum-based transactions, there are no middlemen, ensuring that donations go directly to the creators.
- **Global Platform**: Anyone around the world can contribute without restrictions, thanks to blockchain technology.

## Installation

### Smart Contract Deployment

To get started with the "Buy Me a Chai" project, follow these steps

### 1. Clone the repository

```
git clone https://github.com/yourusername/buy-me-a-chai.git
cd buy-me-a-chai
```

### 2. Install dependencies

```
npm install
```

### 3. Set up your Ethereum wallet & `.env`

Make sure you have Metamask installed in your browser to interact with the Ethereum network. You can download it [here](https://metamask.io/).

```
# Alchemy API URL for Sepolia
SEPOLIA_URL= your_alchemy_sepolia_url_here

# Alchemy API Key for Sepolia
SEPOLIA_API_KEY=your_alchemy_api_key_here

# Private Key for Ethereum Wallet
PRIVATE_KEY=your_private_key_here
```

- Create Account on [Alchemy](https://www.alchemy.com/)

### 4. Deploy the smart contract

```
npx hardhat run --network sepolia scripts/finalDeploy.js
```

### Frontend Setup

1. Navigate to the `client` directory

```
cd client
```

2. Install frontend dependencies & `.env`

```
npm install
```

```
REACT_APP_CONTRACT_ADDRESS=your-contract-address
```

- **NOTE:- when you run this command you will gate your `contract-address`**

```
npx hardhat run --network sepolia scripts/finalDeploy.js
```

3. Start the frontend server

```
npm start
```

### Key Sections

- **Project Description**: Introduces the project concept, emphasizing decentralization, transparency, and blockchain integration.
- **Tech Stack**: Lists the technologies used in the project.
- **Installation Instructions**: Provides step-by-step guidance on how to set up and run the project locally.
- **Smart Contract Deployment**: Instructions on deploying the Ethereum smart contracts.
  Feel free to modify any part of this to better suit your project or personal preferences.
