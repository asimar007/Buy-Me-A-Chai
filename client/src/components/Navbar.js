import React from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Navbar = ({ connectWallet, disconnectWallet, account }) => {

    const handleConnectWallet = async () => {
        try {
            await connectWallet();
            toast.success("Wallet connected successfully!");
        } catch (error) {
            toast.error("Failed to connect wallet. Please try again.");
        }
    };

    const handleDisconnectWallet = async () => {
        try {
            await disconnectWallet();
            toast.success("Wallet disconnected successfully!");
        } catch (error) {
            toast.error("Failed to disconnect wallet. Please try again.");
        }
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="my-8 mx-4 sm:my-9 md:bg-white md:rounded-full md:shadow-lg tracking-wider"
        >
            <div className="px-4 sm:px-8 py-4 flex flex-col items-center justify-between md:flex-row md:justify-center">
                <nav className="flex items-center justify-center w-full">
                    <motion.div
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            className="h-10 w-auto rounded-full shadow-md"
                            src="https://user-images.githubusercontent.com/16066404/77041853-a2044100-69e0-11ea-8da6-d64822a2c72a.jpg"
                            alt="Logo"
                        />
                        <motion.li
                            className="list-none font-italic hover:text-blue-600 text-lg font-bold"
                            whileHover={{ scale: 1.1, color: "#3b82f6" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Buy Me A Chai
                        </motion.li>
                    </motion.div>
                </nav>

                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    {account ? (
                        <>
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-gray-600 font-semibold text-sm sm:text-lg"
                            >
                                {account}
                            </motion.span>
                            <motion.button
                                onClick={handleDisconnectWallet}
                                className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg text-sm sm:text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-red-300"
                                whileHover={{ scale: 1.1, rotate: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Disconnect
                            </motion.button>
                        </>
                    ) : (
                        <motion.button
                            onClick={handleConnectWallet}
                            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold py-2 px-4 rounded-full shadow-lg text-sm sm:text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-blue-300"
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Connect
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.header>
    );
};

export default Navbar;
