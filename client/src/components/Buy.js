import { ethers } from "ethers";
const Buy = ({ state }) => {
    const buyChai = async (event) => {
        event.preventDefault();
        const { contract, signer } = state;
        //const signer = provider.getSigner();
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        console.log(name, message, contract);
        const amount = { value: ethers.utils.parseEther("0.001") };
        const transaction = await contract.connect(signer).buyChai(name, message, amount);
        await transaction.wait();
        console.log("Transaction is done");
    };

    return (
        <section className="mx-auto mt-12 md:mt-20 text-center w-full">
            <div className="py-8 md:py-12 lg:py-16 text-black px-4 bg-blue-100 rounded-lg shadow-lg">
                <form onSubmit={buyChai} className="max-w-md mx-auto">
                    <div className="my-4">
                        <label className="block text-lg font-medium text-center mb-2">Name</label>
                        <div className="flex items-center justify-center">
                            <input
                                id="name"
                                className="p-3 flex rounded-md text-black text-center w-full md:w-2/3 border border-gray-400 focus:outline-none focus:border-blue-500"
                                type="text"
                                placeholder="Enter your Name"
                                required
                            />
                        </div>
                    </div>
                    <div className="my-4">
                        <label className="block text-lg font-medium text-center mb-2">Message</label>
                        <div className="flex items-center justify-center">
                            <input
                                id="message"
                                className="p-3 flex rounded-md text-black text-center w-full md:w-2/3 border border-gray-400 focus:outline-none focus:border-blue-500"
                                type="text"
                                placeholder="Enter your Message"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center my-6 md:my-10 py-4">
                        <button
                            disabled={!state.contract}
                            type="submit"
                            className="text-gray-900 bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                        >
                            <svg
                                className="w-4 h-4 me-2 -ms-1 text-[#626890]"
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
                            Pay 0.001 Eth
                        </button>
                    </div>
                </form>
            </div>
        </section>


    );
};

export default Buy;
