import { useState, useEffect } from "react";

const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const memosMessage = async () => {
            const memos = await contract.getMemos();
            setMemos(memos);
        };
        contract && memosMessage();
    }, [contract]);

    return (
        <>
            <section className="mx-auto mt-12 md:mt-20 text-center bg-yellow-200 py-8">
                <p className="font-bold text-center md:max-w-2xl md:mx-auto my-6 text-3xl md:text-5xl text-gray-800 leading-normal">
                    Supporters
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {memos.map((memo, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                            <div className="p-6">
                                <p className="text-lg font-bold text-gray-800 mb-2">{memo.name}</p>
                                <p className="text-sm text-gray-600 mb-4">{new Date(memo.timestamp * 1000).toLocaleString()}</p>
                                <p className="text-base text-gray-700">{memo.message}</p>
                            </div>
                            <div className="bg-yellow-300 p-4 border-t border-gray-200">
                                <p className="text-sm text-gray-600">From: {memo.from}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>

    );
};

export default Memos;
