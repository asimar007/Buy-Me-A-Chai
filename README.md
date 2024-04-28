# Chai Buying DApp

🍵 My project reimagines support for creators through Web3 technology. Unlike Buy Me a Chai, it's decentralized, transparent, and inclusive. Creators showcase their work, supporters donate cryptocurrency directly via Ethereum smart contracts, ensuring transparency and global accessibility. With community governance and smart contract automation, it's a platform where creativity flourishes, and contributions matter. ☕️



https://github.com/asimar007/Buy-Me-A-Chai/assets/108481922/0fe49d11-5d6c-4ae7-aa81-0e938ac4ce90



## Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![React](https://camo.githubusercontent.com/6c3957842901e5baa389f3bb8758c8966683333b28493013062fcab5fab645e7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642)](https://reactjs.org/)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white])
- ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)

### Prerequisites

### Clone the Repo

```
git clone https://github.com/asimar007/Buy-Me-A-Chai.git
```

### Contract Compilation and Deployment

1.  Install dependencies:

    ```
    npm install
    ```

    - `or` if You use Bun use bun Because bun is much faster (Suggestion)

    ```
    bun install
    ```

2.  Create a `.env` file:

    - Mention the Sepoli URL and your private key in the `.env` file.

3.  Deploy the smart contract:

    ```
    npx hardhat run  --network sepolia scripts/finalDeploy.js
    ```

- for Test

```
npx hardhat run scripts/deploy.js
```

![CLI](https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/blob/main/Screenshot/CLI.jpg?raw=true)

### Frontend Setup

1.  Navigate to the `client` directory:

    ```
    cd client
    ```

2.  Install frontend dependencies:

    ```
    npm install
    ```

    or

    ```
    bun install
    ```

3.  Start the frontend server:

    ```
    npm start
    ```

## Important Notes for Running the Project

### 1. Install MetaMask Extension

- MetaMask is a digital wallet and a gateway to blockchain apps. To interact with our project, you need to install the MetaMask extension in your browser.
- Download MetaMask: [MetaMask Extension](https://metamask.io/download/)

### 2. Select Test Network (Select Sepolia)

- After installing MetaMask, make sure to select the Sepolia test network. This is crucial for testing the project's functionality without using real cryptocurrency.
- Follow these steps to switch to the Sepolia test network:
  1.  Click on the MetaMask extension icon in your browser.
  2.  Select the network dropdown (usually set to Mainnet by default).
  3.  Choose 'Sepolia Test Network' from the list of available networks.

### 3. Add Some Fake Ether

- To perform transactions and interact with the project on the Sepolia test network, you'll need some fake Ether (testnet Ether).
- You can acquire fake Ether for testing purposes by visiting the Infura faucet for the Sepolia network.
- Click on the following link to request fake Ether: [Infura Faucet - Sepolia](https://www.infura.io/faucet/sepolia)

## Usage

Once the DApp is set up:

1.  **Connect your MetaMask wallet.**
2.  **Send crypto for chai.**
3.  **Pen a sweet message.**
4.  **Sip and savor your chai!** 🍵

## Contributing

[](https://github.com/othneildrew/Best-README-Template/blob/master/README.md#contributing)

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## Authors

- [Asim Sk](https://www.linkedin.com/in/asimar007/)
