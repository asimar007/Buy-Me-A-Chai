import React from 'react'
import { motion } from 'framer-motion';

const Mid = () => {
    return (
        <>
            <section className="max-w-4xl mx-auto mt-12 md:mt-28 text-center px-4">
                <article>
                    <h1 className="font-circular text-2xl sm:text-3xl md:text-3xl lg:text-6xl text-slate-900 font-bold leading-normal md:leading-[1.2]">
                        <span className="text-teal-500">Behind every impactful movement,</span> there's a dedicated supporter, worth more than a thousand followers
                    </h1>
                    <motion.p
                        className="font-circular mt-6 text-lg md:text-xl lg:text-2xl leading-normal text-gray-700 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    >
                        A <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 font-semibold">
                            Decentralized application
                        </span> of{' '}
                        <motion.span
                            className="underline decoration-teal-500 decoration-4 font-semibold hover:decoration-wavy transition-all duration-300"
                            whileHover={{ color: "#14b8a6" }}
                        >
                            Buy me a Chai
                        </motion.span>
                    </motion.p>
                </article>
            </section>
        </>
    )
}

export default Mid