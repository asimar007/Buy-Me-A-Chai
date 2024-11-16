import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';

const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const [isCorrectNetwork, setIsCorrectNetwork] = useState(true);
    const [isWalletConnected, setIsWalletConnected] = useState(true);
    const { contract, provider } = state;

    useEffect(() => {
        const checkNetworkAndFetchMemos = async () => {
            if (provider) {
                const signer = provider.getSigner();
                const network = await provider.getNetwork();

                if (network.chainId !== 11155111) {
                    setIsCorrectNetwork(false);
                    toast.error("Please switch to the Sepolia Test Network to view the supporters.", {
                        duration: 5000,
                    });
                } else {
                    setIsCorrectNetwork(true);
                    if (contract) {
                        const fetchedMemos = await contract.getMemos();
                        setMemos(fetchedMemos);
                    }
                }

                const address = await signer.getAddress();
                if (!address) {
                    setIsWalletConnected(false);
                    toast.error("Please connect your wallet to view the supporters.", {
                        duration: 5000,
                    });
                } else {
                    setIsWalletConnected(true);
                }
            }
        };

        checkNetworkAndFetchMemos();
    }, [contract, provider]);

    return (
        <section className="mx-auto mt-12 md:mt-20 text-center py-8">
            <motion.p
                className="font-bold md:max-w-2xl md:mx-auto my-6 text-3xl md:text-5xl text-gray-800 leading-normal"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Supporters
            </motion.p>

            {!isWalletConnected && (
                <motion.p
                    className="text-lg font-medium text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Please connect your wallet to view the supporters.
                </motion.p>
            )}

            {isWalletConnected && !isCorrectNetwork && (
                <motion.p
                    className="text-lg font-medium text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Please switch to the Sepolia Test Network to view the supporters.
                </motion.p>
            )}

            {isWalletConnected && isCorrectNetwork && memos.length > 0 && (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                delayChildren: 0.3,
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {memos.map((memo, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="p-6">
                                <p className="text-lg font-bold text-gray-800 mb-2">{memo.name}</p>
                                <p className="text-sm text-gray-600 mb-4">
                                    {new Date(memo.timestamp * 1000).toLocaleString()}
                                </p>
                                <p className="text-base text-gray-700">{memo.message}</p>
                            </div>
                            <div className="bg-yellow-300 p-4 border-t border-gray-200">
                                <p className="text-sm text-gray-600">
                                    From: {`${memo.from.substring(0, 6)}...${memo.from.slice(-4)}`}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}

            {isWalletConnected && isCorrectNetwork && memos.length === 0 && (
                <motion.p
                    className="text-lg font-medium text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    No supporters found
                </motion.p>
            )}
        </section>
    );
};

export default Memos;
