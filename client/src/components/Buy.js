import { ethers } from "ethers";
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Buy = ({ state }) => {
    const buyChai = async (event) => {
        event.preventDefault();

        const { contract, signer } = state;

        if (!contract) {
            toast.error("Please connect your wallet before making a payment!");
            return;
        }

        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;

        const amount = { value: ethers.utils.parseEther("0.001") };

        try {
            const transaction = await contract.connect(signer).buyChai(name, message, amount);
            await transaction.wait();
            toast.success("Transaction successful!");
            window.location.reload();
        } catch (error) {
            toast.error("Transaction failed!");
            console.error("Error during transaction:", error);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-12 md:mt-20 px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-xl shadow-2xl max-w-3xl"
        >
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg text-black space-y-8">
                <form onSubmit={buyChai} className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-2"
                    >
                        <label htmlFor="name" className="block text-lg font-medium text-gray-600">Your Name</label>
                        <input
                            id="name"
                            className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300 bg-white/70 placeholder-gray-400 text-gray-700"
                            type="text"
                            placeholder="Enter your Name"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-2"
                    >
                        <label htmlFor="message" className="block text-lg font-medium text-gray-600">Your Message</label>
                        <input
                            id="message"
                            className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300 bg-white/70 placeholder-gray-400 text-gray-700"
                            type="text"
                            placeholder="Enter your Message"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            // disabled={!state.contract}
                            type="submit"
                            className="w-full md:w-auto bg-pink-400 text-white font-semibold py-4 px-10 rounded-full shadow-md hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 transition-all duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            <div className="flex items-center justify-center space-x-3">
                                <svg
                                    className="w-6 h-6 text-white"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fab"
                                    data-icon="ethereum"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path>
                                </svg>
                                <span className="text-lg">Pay 0.001 ETH</span>
                            </div>
                        </motion.button>
                    </motion.div>
                </form>
            </div>
        </motion.section>
    );
};

export default Buy;
